const express = require("express");
const auth = require("../middleware/auth");
const Customer = require("../models/customer");

const router = express.Router();

router.post("/customers/add", auth, async (req, res) => {
    const customer = new Customer({
        ...req.body,
        vet: req.user._id,
    });
    try {
        await customer.save();
        res.status(201).send(customer);
    } catch (e) {
        res.status(500).send(e);
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
    const allowedUpdates = ["username", "password"];

    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if (!isValidOperation) res.status(400).send({ error: "Invalid updates" });

    try {
        const customer = await Customer.findOne({ _id: req.params.id, vet: req.user });

        if (!customer) res.status(404).send();

        console.log(customer);
        updates.forEach((update) => {
            customer[update] = req.body[update];
        });
        //console.log(req.user)
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
