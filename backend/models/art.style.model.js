import mongoose from "mongoose";

const artStyleSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        },
        description: String,
        basePrice: {
            type: Number,
            required: true
        },
        samples: [String],
        isActive: {
            type: Boolean,
            default: true
        },
        tags: [String]
    },
    // for further sorting by updated time
    { timestamps: true }
);

const ArtStryle = mongoose.model("ArtStyle", artStyleSchema);

export default ArtStryle;
