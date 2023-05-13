import mongoose from 'mongoose';
const { Schema } = mongoose;

const recipeSchema = new Schema({
    name: { type: String, required: true, unique: true },
    ingredients: [{ type: String, required: true }],
    instructions: [{ type: String, required: true }],
    imageUrl: { type: String, required: true },
    cookingTime: { type: Number, required: true },
    vegetarian: { type: String, required: true },
    vegan: { type: String, required: true },
    type: { type: String, required: true },
    serves: { type: Number },
    source: { type: String },
});

export const Recipe = mongoose.model("Recipe", recipeSchema)