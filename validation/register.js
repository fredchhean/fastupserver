const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data){
  let errors = {};
  if(!Validator.isLength(data.lastname, { min: 2, max: 30})){
    errors.lastname = "last name must be between"
  }
  return{
    errors: errors,
    isValid: isEmpty(errors),
  }
}