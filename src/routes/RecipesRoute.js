const express = require('express');

const router = express.Router();
const { PostRecipe, GetRecipes } = require('../controllers');
const { DecodeWebToken, ValidateRecipe } = require('../middlewares');

router.post('/', DecodeWebToken, ValidateRecipe, PostRecipe);
router.get('/', GetRecipes);

module.exports = router;