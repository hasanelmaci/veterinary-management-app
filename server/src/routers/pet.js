const express = require("express");
const Customer = require("../models/customer");
const Pet = require("../models/pet");
const auth = require("../middleware/auth");
const customerAuth = require("../middleware/customerAuth");

const router = new express.Router();

//add pet
router.post("/customers/:id/pets", auth, async (req, res) => {
    const _id = req.params.id;

    const pet = new Pet({
        ...req.body,
        owner: _id,
    });
    try {
        await pet.save();
        res.status(201).send(pet);
    } catch (e) {
        res.status(500).send(e);
    }
});

//add a passed treatment
router.post("/passedtreatments/:id", auth, async (req, res) => {
    try {
        const pet = await Pet.findById(req.params.id);
        pet.passedtreatments.push(req.body);
        await pet.save();
        res.send(pet);
    } catch (e) {
        res.status(400).send();
    }
});

//add a upcoming treatment
router.post("/upcomingtreatments/:id", auth, async (req, res) => {
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
router.get("/customers/:id/pets", auth, async (req, res) => {
    try {
        const _id = req.params.id;
        const customer = await Customer.findById(_id);
        console.log(customer);

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
router.get("/customers/:customerid/:id", auth, async (req, res) => {
    try {
        const _id = req.params.id;
        const customerid = req.params.customerid;

        const pet = await Pet.findOne({ _id, owner: customerid });

        //Degistir!
        if (!pet) res.status(404).send();

        res.send(pet);
    } catch (e) {
        res.status(500).send();
    }
});

//update pet
router.patch("/customers/:customerid/:id", auth, async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ["name", "animal", "type", "gender", "birthdate", "passedtreatments", "upcomingtreatments"];

    const isValidOperation = updates.every((update) => {
        return allowedUpdates.includes(update);
    });

    if (!isValidOperation) res.status(400).send({ error: "Invalid updates" });

    try {
        const _id = req.params.id;
        const customerid = req.params.customerid;

        const pet = await Pet.findOne({ _id, owner: customerid });

        if (!pet) res.status(404).send();

        updates.forEach((update) => {
            pet[update] = req.body[update];
        });
        await pet.save();
        res.send(pet);
    } catch (e) {
        res.status(400).send();
    }
});

//update pet passed treatments
router.patch("/passedtreatments/:petid/:id", auth, async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ["type", "medicine", "number", "date"];

    const isValidOperation = updates.every((update) => {
        return allowedUpdates.includes(update);
    });

    if (!isValidOperation) res.status(400).send({ error: "Invalid updates" });

    try {
        Pet.findById(req.params.petid, async (err, post) => {
            const treatment = post.passedtreatments.id(req.params.id);
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
router.patch("/upcomingtreatments/:petid/:id", auth, async (req, res) => {
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
module.exports = router;

//delete passed treatment
router.delete("/passedtreatments/:petid/:id", auth, async (req, res) => {
    try {
        Pet.findById(req.params.petid, async (err, post) => {
            const treatment = post.passedtreatments.id(req.params.id);
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
router.delete("/upcomingtreatments/:petid/:id", auth, async (req, res) => {
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
