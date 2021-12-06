const { User } = require('../../models');

module.exports = async (userData) => {
  const newUser = new User(userData);
  try {
    await newUser.save();
    const { name, email, role } = newUser;
    return { name, email, role };
  } catch (err) {
    return err;
  }
};