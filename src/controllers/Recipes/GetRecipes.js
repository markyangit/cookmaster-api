const { GetRecipes } = require('../../services');

module.exports = async (_req, res) => {
  const recipes = await GetRecipes();
  res.status(200).send(recipes);
};