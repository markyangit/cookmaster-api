const { ObjectId } = require('mongodb');
const { RecipeNotFound } = require('../../errors');
const { Recipe } = require('../../models');

module.exports = async (id) => {
  if (!ObjectId.isValid(id)) throw RecipeNotFound;
  try {
    const recipe = await Recipe.findById(id);
    return recipe;
  } catch (err) {
    console.log(err);
  }
};