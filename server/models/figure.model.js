const mongoose = require("mongoose");

const FigureSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "name is required"],
        minLength: [3, "Name must be at least 3 characters"]
    },

    season: {
        type: String,
        required: [true, "need a season"],
        enum: ["1", "2", "3", "4", "5", "N/A"],
    },

    category: {
        type: String,
        required: [true, "need category"],
        enum: ["digivolving", "d-arts/figuarts", "d-real","miniatures", "other"],
    },

    region: {
        type: String,
        required: [true, "need region"],
        enum: ["JP/US", "US", "JP", "KOR"],
    },

    rating: {
        type: String,
        enum: ["1", "2", "3", "4", "5"],
    },

    image1: {
        type: String,
        required: [true, "Don't be stingy!! Need atleast one image"],
    },
    image2: {
        type: String
    },
    image3: {
        type: String
    },

    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }





}, {timestamps:true})

const Figure = mongoose.model("Figure", FigureSchema);

module.exports = Figure;