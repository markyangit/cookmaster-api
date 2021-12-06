const { Recipe } = require('../models');

module.exports = async (recipeData) => {
  const NewRecipe = new Recipe(recipeData);
  try {
    await NewRecipe.save();
    return NewRecipe;
  } catch (err) {
    return err;
  }
};