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

    if (!isValidOperation) {
        return res.status(400).send({ error: "Invalid updates" });
      }

      try{

        const _id = req.params.id;
        const customerid = req.params.customerid;

        const pet = await Pet.findOne({ _id, owner: customerid })

        if(!pet) res.status(404).send()

        updates.forEach(update =>{
            pet[update] = req.body[update]
        })
        await pet.save()
        res.send(pet)
      }catch(e){
        res.status(400).send();
      }
});

//update pet treatments
router.patch("/treatments/:id",auth,async (req,res)=>{
    const updates = Object.keys(req.body);
    const allowedUpdates = ["type","medicine","number","date"]
    /////////////
})
module.exports = router;
