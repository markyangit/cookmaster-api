const { User } = require('../../models');

module.exports = async (req, res) => {
  const newUser = new User(req.body);
  try {
    await newUser.save();
    const { name, email, role } = newUser;
    return res.status(201).send({ user: { name, email, role } });
  } catch (err) {
    return res.status(500).send(err);
  }
};