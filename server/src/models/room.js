const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema(
  {
    room: {
      type: String,
      trim: true,
    },
    user: {
      type: String,
      trim: true,
    },
    customer: {
      type: String,
      trim: true,
    },
  },

  {
    timestamps: true,
  }
);

roomSchema.virtual("messages", {
  ref: "Message",
  localField: "room",
  foreignField: "room",
});

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;
