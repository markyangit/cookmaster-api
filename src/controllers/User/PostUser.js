const { PostUser } = require('../../services');

module.exports = async (req, res) => {
  try {
    const newUser = await PostUser(req.body);
    const { name, email, role } = newUser;
    return res.status(201).send({ user: { name, email, role } });
  } catch (err) {
    return res.status(500).send(err);
  }
};