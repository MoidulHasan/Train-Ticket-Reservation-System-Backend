// Dependencies
const mongoose = require("mongoose");


// schema schafolding
const formSchema = mongoose.Schema({
    Name: {
        type: String,
        required: true,
        select: true,
    },
    Gender: {
        type: String,
        required: false,
        select: true,
    },
    From: {
        type: String,
        required: true,
        select: true,
    },
    To: {
        type: String,
        required: true,
        select: true,
    },
    Date: {
        type: String,
        required: true,
        select: true,
    },
    Time: {
        type: String,
        required: true,
        select: true,
    },
    Price: {
        type: Number,
        required: true,
        select: true,
    },
    Note: {
        type: String,
        required: true,
        select: true,
    }
});


// export model
const formData = mongoose.model("formData", formSchema);
module.exports = formData;