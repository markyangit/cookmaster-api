const { Recipe } = require('../../models');

module.exports = async (id, { name, ingredients, preparation }, userId) => {
  try {
    await Recipe.updateOne({ _id: id }, { name, ingredients, preparation });
    return { _id: id, name, ingredients, preparation, userId };
  } catch (err) {
    console.log(err);
  }
};