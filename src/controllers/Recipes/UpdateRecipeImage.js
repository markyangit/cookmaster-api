const { UpdateRecipeImage } = require('../../services');

module.exports = async (req, res) => {
  const { params: { id }, file: { filename } } = req;

  try {
    const recipe = await UpdateRecipeImage(id, `localhost:3000/src/uploads/${filename}.jpeg`);
    return res.status(200).send(recipe);
  } catch (err) {
    res.status(500).send(err);
  }
};