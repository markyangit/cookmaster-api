const { Recipe } = require('../../models');

module.exports = async (_req, res) => {
  const recipes = await Recipe.find();
  res.status(200).send(recipes);
};