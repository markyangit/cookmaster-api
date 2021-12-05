const Joi = require('joi');

const NewUserSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().pattern(new RegExp(/^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/i)).required(),
  password: Joi.string().required(),
});

module.exports = NewUserSchema;