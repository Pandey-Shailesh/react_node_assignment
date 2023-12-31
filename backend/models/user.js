// this is a Schema of User (I called it as userSchema)

const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxlength: 40,
        trim: true
    },
    email: {
        type: String,
        required: true,
        maxlength: 40,
        trim: true
    },
    password: {
        type: String,
        required: true,
        maxlength: 40,
        trim: true

    },
    mobile: {
        type: Number,
        required: true,
        maxlength: 10,
        trim: true
    }

});

module.exports = mongoose.model("User", userSchema);