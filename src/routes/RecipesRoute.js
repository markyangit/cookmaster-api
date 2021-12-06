const express = require('express');

const router = express.Router();
const { PostRecipe, GetRecipes, GetRecipeById } = require('../controllers');
const { DecodeWebToken, ValidateRecipe } = require('../middlewares');

router.post('/', DecodeWebToken, ValidateRecipe, PostRecipe);
router.get('/', GetRecipes);
router.get('/:id', GetRecipeById);

module.exports = router;