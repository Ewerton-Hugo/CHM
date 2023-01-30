const mongoose = require("mongoose");

const {Schema} = mongoose

const characterSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
    },
    { timestamps:true }
)
const Character = mongoose.model("Character", characterSchema);

module.exports = {Character};
