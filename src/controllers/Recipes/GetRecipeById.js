const { GetRecipeById } = require('../../services');

module.exports = async (req, res) => {
  const { id } = req.params;

  try {
    const recipe = await GetRecipeById(id);
    res.status(200).send(recipe);
  } catch ({ status, message }) {
    res.status(status).send({ message });
  }
};