const express = require("express");
const auth = require("../middleware/auth");
const Customer = require("../models/customer");
const customerAuth = require("../middleware/customerAuth")

const router = express.Router();

//login as customer
router.post("/customers/login", async (req, res) => {
    try {
        const customer = await Customer.findByCredentials(req.body.email, req.body.password);
        const token = await customer.generateAuthToken();
        res.send({ customer: customer, token });
    } catch (e) {
        res.status(400).send();
    }
});

//get profile as customer
router.get("/customers/me", customerAuth, async (req, res) => {
    res.send(req.customer);
});

router.post("/customers/logout", customerAuth, async (req, res) => {
    try {
        req.customer.tokens = req.customer.tokens.filter((token) => token.token != req.token);
        await req.customer.save();
        res.send();
    } catch (e) {
        res.status(500).send();
    }
});

router.post("/customers/add", auth, async (req, res) => {
    const customer = new Customer({
        ...req.body,
        vet: req.user._id,
    });
    try {
        await customer.save();
        const token = await customer.generateAuthToken();
        res.status(201).send({ customer, token });
    } catch (e) {
        res.status(500).send(e);
    }
});

router.post("/customer/logoutAll", customerAuth, async (req, res) => {
    try {
      req.customer.tokens = [];
      await req.customer.save();
      res.send();
    } catch (e) {
      res.status(500).send();
    }
  });


router.get("/customers", auth, async (req, res) => {
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

router.get("/customers/:id", auth, async (req, res) => {
    const _id = req.params.id;
    try {
        const customer = await Customer.findOne({ _id, vet: req.user._id });
        console.log(customer);
        if (!customer) res.status(400).send();
        res.send(customer);
    } catch (e) {
        res.status(500).send();
    }
});

router.patch("/customers/:id", auth, async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ["username","email", "password"];

    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if (!isValidOperation) res.status(400).send({ error: "Invalid updates" });

    try {
        const customer = await Customer.findOne({ _id: req.params.id, vet: req.user });

        if (!customer) res.status(404).send();

        console.log(customer);
        updates.forEach((update) => {
            customer[update] = req.body[update];
        });
        await customer.save();
        res.send(customer);
    } catch (e) {
        res.status(400).send();
    }
});

router.delete("/customers/:id", auth, async (req, res) => {
    try {
        const customer = await Customer.findOneAndDelete({ _id: req.params.id, vet: req.user._id });
        if (!customer) res.status(400).send();
        res.send(customer);
    } catch (e) {
        res.status(500).send();
    }
});

module.exports = router;
