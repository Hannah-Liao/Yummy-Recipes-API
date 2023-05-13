import { Recipe } from "../models/Recipes.js";

export const getRandomRecipes = async (req, res) => {

    const number = parseInt(req.query.number);
    const { vegerarian, vegan, type } = req.query;

    try {
        const customrecipes = await Recipe.aggregate()
            .match({ $and: [vegerarian ? { vegerarian: vegerarian } : {}, vegan ? { vegan: vegan } : {}, type ? { type: type } : {}] })
            .sample(number ? number : 1)

        res.status(200).json({ count: customrecipes.length, data: customrecipes });
    } catch (err) {
        res.status(404).json({ success: false, message: "Not found" });
    }
};

export const getAllRecipes = async (req, res) => {

    const page = parseInt(req.query.page) - 1;
    const limit = parseInt(req.query.limit);
    const { vegerarian, vegan, type } = req.query;

    try {
        const totalRecipes = await Recipe.find({ $and: [vegerarian ? { vegerarian: vegerarian } : {}, vegan ? { vegan: vegan } : {}, type ? { type: type } : {}] })
            .sort({ createdAt: -1 })
        const recipes = await Recipe.find({ $and: [vegerarian ? { vegerarian: vegerarian } : {}, vegan ? { vegan: vegan } : {}, type ? { type: type } : {}] })
            .sort({ createdAt: -1 })
            .skip(page * limit).limit(limit ? limit : 20);
        res.status(200).json({
            count: recipes.length,
            totalCount: totalRecipes.length,
            page: page ? page : 1,
            totalPages: Math.ceil(totalRecipes.length / limit),
            data: recipes
        });
    } catch (err) {
        res.status(404).json({ success: false, message: "Not found" });
    }
};
