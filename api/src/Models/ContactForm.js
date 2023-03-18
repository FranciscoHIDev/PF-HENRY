const mongoose = require("mongoose");

const contactFormSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 15,
    },
    lastname: {
        type: String,
        minLength: 3,
        maxLength: 20,
    },
    emailAddress: {
        type: String,
        required: true,

    },
    message: {
        type: String,
        required: true,
        minLength: 10,
        maxLength: 500,
    },
    active: {
        type: String,
        enum: ["valid", "invalid"],
        default: "valid",
    },
});
module.exports = mongoose.model("ContactForm", contactFormSchema);