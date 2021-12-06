const { Recipe } = require('../../models');

module.exports = async (req, res) => {
  const { name, ingredients, preparation } = req.body;
  const NewRecipe = new Recipe({ name, ingredients, preparation, userId: req.user });
  try {
    await NewRecipe.save();
    return res.status(201).send({ recipe: NewRecipe });
  } catch (err) {
    return res.status(500).send(err);
  }
};