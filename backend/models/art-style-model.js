const mongoose = require("mongoose");

const artStyleSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    description: String,
    basePrice: { type: Number, required: true },
    samples: [String],
    isActive: { type: Boolean, default: true },
    tags: [String]
}, { timestamps: true });

module.exports = mongoose.model("ArtStyle", artStyleSchema);
