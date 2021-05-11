const express = require("express");
const Customer = require("../models/customer");
const Pet = require("../models/pet");
const auth = require("../middleware/auth");
const customerAuth = require("../middleware/customerAuth");

const router = new express.Router();

//add pet
router.post("/api/customers/:id/pets", auth, async (req, res) => {
  const _id = req.params.id;

  try {
    const pet = new Pet({
      ...req.body,
      owner: _id,
    });
    const customer = await Customer.findOne({ _id, vet: req.user._id });
    if (!customer) {
      return res.status(500).send();
    }
    await pet.save();
    res.status(201).send(pet);
  } catch (e) {
    res.status(500).send(e);
  }
});

//add a past treatment
router.post("/api/pasttreatments/:id", auth, async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id);
    pet.pasttreatments.push(req.body);
    await pet.save();
    res.send(pet);
  } catch (e) {
    res.status(400).send();
  }
});

//add a upcoming treatment
router.post("/api/upcomingtreatments/:id", auth, async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id);
    pet.upcomingtreatments.push(req.body);
    await pet.save();
    res.send(pet);
  } catch (e) {
    res.status(400).send();
  }
});

//Read pets
router.get("/api/customers/:id/pets", auth, async (req, res) => {
  try {
    const _id = req.params.id;
    const customer = await Customer.findById(_id);

    if (!customer) throw new Error();

    await customer
      .populate({
        path: "pets",
      })
      .execPopulate();
    res.send(customer.pets);
  } catch (e) {
    res.status(500).send();
  }
});

//Read a single pet of a customer
router.get("/api/customers/:customerid/:id", auth, async (req, res) => {
  try {
    const _id = req.params.id;
    const customerid = req.params.customerid;

    const pet = await Pet.findOne({ _id, owner: customerid });
    const owner = await Customer.findOne({ _id: customerid, vet: req.user._id });

    //Degistir!
    if (!pet) res.status(404).send();
    if (!owner) res.status(404).send();
    res.send(pet);
  } catch (e) {
    res.status(500).send();
  }
});

//update pet
router.patch("/api/customers/:customerid/:id", auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "animal", "type", "gender", "birthdate", "pasttreatments", "upcomingtreatments"];

  const isValidOperation = updates.every((update) => {
    return allowedUpdates.includes(update);
  });

  if (!isValidOperation) res.status(400).send({ error: "Invalid updates" });
  try {
    const _id = req.params.id;
    const customerid = req.params.customerid;

    const pet = await Pet.findOne({ _id, owner: customerid });
    const owner = await Customer.findOne({ _id: customerid, vet: req.user._id });

    if (!pet) res.status(404).send();
    if (!owner) res.status(404).send();
    updates.forEach((update) => {
      pet[update] = req.body[update];
    });
    await pet.save();
    res.send(pet);
  } catch (e) {
    res.status(400).send();
  }
});

//update pet past treatments
router.patch("/api/pasttreatments/:petid/:id", auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["type", "medicine", "number", "date"];

  const isValidOperation = updates.every((update) => {
    return allowedUpdates.includes(update);
  });

  if (!isValidOperation) res.status(400).send({ error: "Invalid updates" });

  try {
    Pet.findById(req.params.petid, async (err, post) => {
      const treatment = post.pasttreatments.id(req.params.id);
      treatment.set(req.body);
      await post.save();
      res.send(treatment);
    });
    if (!treatment) throw new Error();
  } catch (e) {
    res.status(400).send();
  }
});

//update pet upcoming treatments
router.patch("/api/upcomingtreatments/:petid/:id", auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["type", "medicine", "number", "date"];

  const isValidOperation = updates.every((update) => {
    return allowedUpdates.includes(update);
  });

  if (!isValidOperation) res.status(400).send({ error: "Invalid updates" });

  try {
    Pet.findById(req.params.petid, async (err, post) => {
      const treatment = post.upcomingtreatments.id(req.params.id);
      treatment.set(req.body);
      await post.save();
      res.send(treatment);
    });
    if (!treatment) throw new Error();
  } catch (e) {
    res.status(400).send();
  }
});

//delete past treatment
router.delete("/api/pastreatments/:petid/:id", auth, async (req, res) => {
  try {
    Pet.findById(req.params.petid, async (err, post) => {
      const treatment = post.pasttreatments.id(req.params.id);
      if (!treatment) res.status(404).send();
      treatment.remove();
      await post.save();
      res.send(treatment);
    });
  } catch (e) {
    res.status(400).send();
  }
});

//delete upcoming treatment
router.delete("/api/upcomingtreatments/:petid/:id", auth, async (req, res) => {
  try {
    Pet.findById(req.params.petid, async (err, post) => {
      const treatment = post.upcomingtreatments.id(req.params.id);
      if (!treatment) res.status(404).send();
      treatment.remove();
      await post.save();
      res.send(treatment);
    });
  } catch (e) {
    res.status(400).send();
  }
});
module.exports = router;
