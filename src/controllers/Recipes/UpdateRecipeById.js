const { UpdateRecipeById } = require('../../services');

module.exports = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await UpdateRecipeById(id, req.body, req.user);
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send(err);
  }
};