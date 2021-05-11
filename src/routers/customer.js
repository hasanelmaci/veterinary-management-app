const express = require("express");
const auth = require("../middleware/auth");
const multer = require("multer");
const sharp = require("sharp");
const Customer = require("../models/customer");
const Pet = require("../models/pet");
const Room = require("../models/room");
const customerAuth = require("../middleware/customerAuth");

const router = express.Router();

//login as customer
router.post("/api/asCustomer/login", async (req, res) => {
  try {
    const customer = await Customer.findByCredentials(req.body.email, req.body.password);
    const token = await customer.generateAuthToken();
    res.send({ customer: customer, token });
  } catch (e) {
    res.status(400).send();
  }
});

//get profile as customer
router.get("/api/asCustomers/me", customerAuth, async (req, res) => {
  res.send(req.customer);
});

//get all pets as customer
router.get("/api/asCustomer/pets", customerAuth, async (req, res) => {
  try {
    await req.customer
      .populate({
        path: "pets",
      })
      .execPopulate();
    res.send(req.customer.pets);
  } catch (e) {
    res.status(500).send();
  }
});

//Read single pet as customer
router.get("/api/asCustomer/pet/:id", customerAuth, async (req, res) => {
  const _id = req.params.id;

  try {
    const pet = await Pet.findOne({ _id, owner: req.customer._id });
    if (!pet) {
      return res.status(404).send();
    }

    res.send(pet);
  } catch (e) {
    res.status(500).send();
  }
});

//logout as customer
router.post("/api/asCustomers/logout", customerAuth, async (req, res) => {
  try {
    req.customer.tokens = req.customer.tokens.filter((token) => token.token != req.token);
    await req.customer.save();
    res.send();
  } catch (e) {
    res.status(500).send();
  }
});

//Add a new customer
router.post("/api/user/addcustomer", auth, async (req, res) => {
  const customer = new Customer({
    ...req.body,
    vet: req.user._id,
  });
  try {
    await customer.save();
    const room = new Room({ room: customer._id, user: req.user._id, customer: customer._id });
    await room.save();
    const token = await customer.generateAuthToken();
    res.status(201).send({ customer, token });
  } catch (e) {
    res.status(500).send(e);
  }
});

//logout from everywhere as customer
router.post("/api/asCustomer/logoutAll", customerAuth, async (req, res) => {
  try {
    req.customer.tokens = [];
    await req.customer.save();
    res.send();
  } catch (e) {
    res.status(500).send();
  }
});

//Get all customers
router.get("/api/customers", auth, async (req, res) => {
  try {
    await req.user
      .populate({
        path: "customers",
      })
      .execPopulate();
    res.send(req.user.customers);
  } catch (e) {
    res.status(500).send();
  }
});

//Read a customer
router.get("/api/customers/:id", auth, async (req, res) => {
  const _id = req.params.id;
  try {
    const customer = await Customer.findOne({ _id, vet: req.user._id });
    if (!customer) res.status(400).send();
    res.send(customer);
  } catch (e) {
    res.status(500).send();
  }
});

router.patch("/api/customers/:id", auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["username", "email", "password"];

  const isValidOperation = updates.every((update) => allowedUpdates.includes(update));
  if (!isValidOperation) res.status(400).send({ error: "Invalid updates" });

  try {
    const customer = await Customer.findOne({ _id: req.params.id, vet: req.user });

    if (!customer) res.status(404).send();

    updates.forEach((update) => {
      customer[update] = req.body[update];
    });
    await customer.save();
    res.send(customer);
  } catch (e) {
    res.status(400).send("Invalid updates");
  }
});

router.delete("/api/customers/:id", auth, async (req, res) => {
  try {
    const customer = await Customer.findOneAndDelete({ _id: req.params.id, vet: req.user._id });
    if (!customer) res.status(400).send();
    res.send(customer);
  } catch (e) {
    res.status(500).send();
  }
});

const upload = multer({
  limits: {
    fileSize: 200000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(new Error("Please upload a picture"));
    }
    return cb(undefined, true);
  },
});

router.post(
  "/api/pets/:id/avatar",
  customerAuth,
  upload.single("avatar"),
  async (req, res) => {
    const buffer = await sharp(req.file.buffer).resize({ width: 250, height: 250 }).png().toBuffer();

    const pet = await Pet.findById(req.params.id);
    if (!pet) {
      throw new Error();
    }
    pet.avatar = buffer;
    pet.avatarPath = `/api/pets/${req.params.id}/avatar`;
    await pet.save();
    res.send();
  },
  (error, req, res, next) => {
    res.status(400).send("Please upload a image under 200KB");
  }
);

router.get("/api/pets/defaultavatar", async (req, res) => {
  res.set({ "Content-Type": "avatar/png" });
});

router.delete("/api/pets/:id/avatar", customerAuth, async (req, res) => {
  const pet = await Pet.findById(req.params.id);
  pet.avatar = undefined;
  await pet.save();
  res.send();
});

router.get("/api/pets/:id/avatar", async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id);
    if (!pet || !pet.avatar) {
      throw new Error();
    }
    res.set("Content-Type", "image/png");
    res.send(pet.avatar);
  } catch (e) {
    res.status(404).send();
  }
});

module.exports = router;
