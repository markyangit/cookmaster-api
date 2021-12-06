const express = require('express');

const router = express.Router();
const {
  PostRecipe,
  GetRecipes,
  GetRecipeById,
  UpdateRecipeById,
  DeleteRecipeById,
} = require('../controllers');
const { DecodeWebToken, ValidateRecipe } = require('../middlewares');

router.post('/', DecodeWebToken, ValidateRecipe, PostRecipe);
router.get('/', GetRecipes);
router.get('/:id', GetRecipeById);
router.put('/:id', DecodeWebToken, UpdateRecipeById);
router.delete('/:id', DecodeWebToken, DeleteRecipeById);

module.exports = router;