const express = require('express');

const router = express.Router();
const { PostRecipe } = require('../controllers');
const { DecodeWebToken, ValidateRecipe } = require('../middlewares');

router.post('/', DecodeWebToken, ValidateRecipe, PostRecipe);

module.exports = router;