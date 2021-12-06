const Joi = require('joi');

const RecipeSchema = Joi.object({
  name: Joi.string().required(),
  ingredients: Joi.string().required(),
  preparation: Joi.string().required(),
});

module.exports = RecipeSchema;