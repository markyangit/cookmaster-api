const { Recipe } = require('../../models');

module.exports = async () => {
  try {
    const recipes = await Recipe.find();
    return recipes;
  } catch (err) {
    return err;
  }
};