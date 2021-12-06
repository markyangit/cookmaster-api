const { DeleteRecipeById } = require('../../services');

module.exports = async (req, res) => {
  const { id } = req.params;
  try {
    await DeleteRecipeById(id);
    return res.status(204).send();
  } catch (err) {
    return res.status(500).send(err);
  }
};