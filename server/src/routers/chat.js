const express = require("express");
const auth = require("../middleware/auth");
const customerAuth = require("../middleware/customerAuth");
const Message = require("../models/message");
const Room = require("../models/room");

const router = new express.Router();

//Add message as user
router.post("/chat/:id", auth, async (req, res) => {
  const _id = req.params.id;

  const message = new Message({
    ...req.body,
    room: _id,
  });

  try {
    const room = await Room.findOne({ room: _id });
    if (room.user != req.user._id) throw new Error();

    await message.save();
    res.status(201).send(message);
  } catch (e) {
    res.status(500).send(e);
  }
});

//Add message as customer
router.post("/customerchat", customerAuth, async (req, res) => {
  const _id = req.customer._id;

  const message = new Message({
    ...req.body,
    room: _id,
  });

  try {
    const room = await Room.findOne({room:_id});
    if(room.customer != req.customer._id) throw new Error();

    await message.save();
    res.status(201).send(message);
  } catch (e) {
    res.status(500).send(e);
  }
});

//Read messages as user
router.get("/chat/:id", auth, async (req, res) => {
  try {
    const _id = req.params.id;
    const room = await Room.findOne({ room: _id,user:req.user._id });

    await room
      .populate({
        path: "messages",
      })
      .execPopulate();
    res.send(room.messages);
  } catch (e) {
    res.status(500).send();
  }
});



//Read messages as customer
router.get("/customerchat", customerAuth, async (req, res) => {
  try {
    const _id = req.customer._id;
    const room = await Room.findOne({ room: _id,customer:_id });

    await room
      .populate({
        path: "messages",
      })
      .execPopulate();
    res.send(room.messages);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
