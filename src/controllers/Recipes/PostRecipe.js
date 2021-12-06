const { PostRecipe } = require('../../services');

module.exports = async (req, res) => {
  const { name, ingredients, preparation } = req.body;
  try {
    const NewRecipe = await PostRecipe({ name, ingredients, preparation, userId: req.user });
    return res.status(201).send({ recipe: NewRecipe });
  } catch (err) {
    return res.status(500).send(err);
  }
};