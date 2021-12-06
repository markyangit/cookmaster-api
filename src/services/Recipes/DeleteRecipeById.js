const { Recipe } = require('../../models');

module.exports = async (id) => {
  try {
    await Recipe.deleteOne({ _id: id });
  } catch (err) {
    console.log(err);
  }
};