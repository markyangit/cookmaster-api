const { Recipe } = require('../../models');

module.exports = async (id, filename) => {
  try {
    await Recipe.updateOne({ _id: id }, { image: filename });
    const { _id, name, ingredients, preparation, userId, image } = await Recipe.findById(id);
    return { _id, name, ingredients, preparation, userId, image };
  } catch (err) {
    console.log(err);
  }
};