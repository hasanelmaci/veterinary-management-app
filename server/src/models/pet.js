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
        passedtreatments: [
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
    },
    {
        timestamps: true,
    }
);

const Pet = mongoose.model("Pet", petSchema);

module.exports = Pet;
