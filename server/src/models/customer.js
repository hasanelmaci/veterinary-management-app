const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const validator = require("validator");

const customerSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
            trim: true,
            lowercase: true,
            validate(value) {
                if (!validator.isEmail(value)) {
                    throw new Error("Email is invalid");
                }
            },
        },
        vet: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },
        tokens: [
            {
                token: {
                    type: String,
                    required: true,
                },
            },
        ]
    },
    {
        timestamps: true,
    }
);

customerSchema.virtual("pets", {
    ref: "Pet",
    localField: "_id",
    foreignField: "owner",
});

customerSchema.methods.toJSON = function () {
    const customer = this;
    const customerObject = customer.toObject();
    return customerObject;
};

customerSchema.methods.generateAuthToken = async function () {
    const customer = this;
    const token = jwt.sign({ _id: customer._id.toString() }, process.env.JWT_SECRET);

    customer.tokens = customer.tokens.concat({ token });
    await customer.save();

    return token;
};

customerSchema.statics.findByCredentials = async (email, password) => {
    const customer = await Customer.findOne({ email });
    if (!customer) throw new Error("Unable to login");

    const isMatch = await bcrypt.compare(password, customer.password);
    if (!isMatch) throw new Error("Unable to login");

    return customer;
};

customerSchema.pre("save", async function (next) {
    const customer = this;
    if (customer.isModified("password")) customer.password = await bcrypt.hash(customer.password, 8);
    next();
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
