const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data){
  let errors = {};

  data.lastname = !isEmpty(data.lastname) ? data.lastname : '';
  data.firstname = !isEmpty(data.firstname) ? data.firstname : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';

  if (!Validator.isLength(data.lastname, { min: 2, max: 30 })) {
    errors.lastname = 'lastname must be between 2 and 30 characters';
  }

  if (Validator.isEmpty(data.lastname)) {
    errors.lastname = 'lastname field is required';
  }
  if (!Validator.isLength(data.firstname, { min: 2, max: 30 })) {
    errors.firstname = 'firstname must be between 2 and 30 characters';
  }

  if (Validator.isEmpty(data.firstname)) {
    errors.firstname = 'firstname field is required';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'Password must be at least 6 characters';
  }


  return{
    errors: errors,
    isValid: isEmpty(errors),
  }
}