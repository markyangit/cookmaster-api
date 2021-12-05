module.exports = (req, res) => {
  const { token } = req.body;
  res.status(200).send({ token });
};