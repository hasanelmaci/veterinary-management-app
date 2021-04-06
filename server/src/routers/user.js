const express = require("express");
const User = require("../models/user");
const auth = require('../middleware/auth')

const router = new express.Router();

router.post("/signup", async (req, res) => {
    const user = new User(req.body);
    try {
      await user.save();
      const token = await user.generateAuthToken();
      res.status(201).send({ user, token });
    } catch (e) {
      res.status(400).send(e);
    }
});

router.get("homepage",auth,async (req,res)=>{
    res.send(req.user)
})

module.exports = router;
