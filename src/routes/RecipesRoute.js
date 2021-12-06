const express = require('express');

const router = express.Router();
const { PostRecipe, GetRecipes, GetRecipeById, UpdateRecipeById } = require('../controllers');
const { DecodeWebToken, ValidateRecipe } = require('../middlewares');

router.post('/', DecodeWebToken, ValidateRecipe, PostRecipe);
router.get('/', GetRecipes);
router.get('/:id', GetRecipeById);
router.put('/:id', DecodeWebToken, UpdateRecipeById);

module.exports = router;