import { Router } from "express";
const router = Router();

import { getRandomRecipes, getAllRecipes } from "../controllers/recipes.js";

router.get("/random", getRandomRecipes);
router.get("/all", getAllRecipes);

export default router