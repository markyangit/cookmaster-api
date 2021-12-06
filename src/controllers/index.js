const PostUser = require('./User/PostUser');
const Login = require('./Login');
const PostRecipe = require('./Recipes/PostRecipe');
const GetRecipes = require('./Recipes/GetRecipes');
const GetRecipeById = require('./Recipes/GetRecipeById');
const UpdateRecipeById = require('./Recipes/UpdateRecipeById');
const DeleteRecipeById = require('./Recipes/DeleteRecipeById');

module.exports = {
  PostUser,
  Login,
  PostRecipe,
  GetRecipes,
  GetRecipeById,
  UpdateRecipeById,
  DeleteRecipeById,
};