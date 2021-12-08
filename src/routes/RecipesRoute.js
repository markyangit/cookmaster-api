const express = require('express');
const multer = require('multer');
const path = require('path');

const router = express.Router();
const {
  PostRecipe,
  GetRecipes,
  GetRecipeById,
  UpdateRecipeById,
  DeleteRecipeById,
  UpdateRecipeImage,
} = require('../controllers');
const { DecodeWebToken, ValidateRecipe } = require('../middlewares');

// Storage e configs feitas com a ajuda do Rodrigo Merlone da Turma 12.
const storage = multer.diskStorage({
  destination: (_req, _file, callback) => callback(null, path.join(__dirname, '../uploads')),
  filename: ({ params: { id } }, _file, callback) => callback(null, `${id}`),
});

const upload = multer({ storage });
//

router.post('/', DecodeWebToken, ValidateRecipe, PostRecipe);
router.get('/', GetRecipes);
router.get('/:id', GetRecipeById);
router.put('/:id', DecodeWebToken, UpdateRecipeById);
router.delete('/:id', DecodeWebToken, DeleteRecipeById);
router.put('/:id/image', DecodeWebToken, upload.single('image'), UpdateRecipeImage);

module.exports = router;