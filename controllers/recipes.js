import { Recipe } from "../models/Recipes.js";

export const getRandomRecipes = async (req, res) => {

    const number = parseInt(req.query.number);
    const { vegerarian, vegan, type } = req.query;

    try {
        const customrecipes = await Recipe.aggregate()
            .match({ $and: [vegerarian ? { vegerarian: vegerarian } : {}, vegan ? { vegan: vegan } : {}, type ? { type: type } : {}] })
            .sample(number ? number : 1)

        res.status(200).json({ success: true, recipesCount: customrecipes.length, message: "Successful", data: customrecipes });
    } catch (err) {
        res.status(404).json({ success: false, message: "Not found" });
    }
};

export const getAllRecipes = async (req, res) => {

    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);

    try {
        const recipes = await Recipe.find({}).sort({ createdAt: -1 }).skip(page * limit).limit(limit ? limit : 50);
        res.status(200).json({ success: true, recipesCount: recipes.length, message: "Successful", data: recipes });
    } catch (err) {
        res.status(404).json({ success: false, message: "Not found" });
    }
};
