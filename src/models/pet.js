const mongoose = require("mongoose");

const petSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    animal: {
      type: String,
      trim: true,
    },
    type: {
      type: String,
      trim: true,
    },
    gender: {
      type: String,
      trim: true,
    },
    birthdate: {
      type: String,
      trim: true,
    },
    pasttreatments: [
      {
        type: {
          type: String,
          trim: true,
        },
        medicine: {
          type: String,
          trim: true,
        },
        number: {
          type: String,
          trim: true,
        },
        date: {
          type: String,
          trim: true,
        },
      },
    ],
    upcomingtreatments: [
      {
        type: {
          type: String,
          trim: true,
        },
        medicine: {
          type: String,
          trim: true,
        },
        number: {
          type: String,
          trim: true,
        },
        date: {
          type: String,
          trim: true,
        },
      },
    ],
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Customer",
    },
    avatar: {
      type: Buffer,
    },
    avatarPath: {
      type: String,
      // default: "https://icon-library.com/images/paw-print-icon/paw-print-icon-1.jpg",
      default: "https://i.imgur.com/EsQjYL2.jpg",
    },
  },
  {
    timestamps: true,
  }
);

petSchema.methods.toJSON = function () {
  const pet = this;
  const petObject = pet.toObject();
  delete petObject.avatar;

  return petObject;
};

const Pet = mongoose.model("Pet", petSchema);

module.exports = Pet;
