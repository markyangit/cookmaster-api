const Joi = require('joi');

const ValidateLoginSchema = Joi.object({
  email: Joi.string().pattern(new RegExp(/^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/i)).required(),
  password: Joi.string().required(),
});

module.exports = ValidateLoginSchema;