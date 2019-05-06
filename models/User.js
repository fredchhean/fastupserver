const mongoose = require ("mongoose");  
const Schema = mongoose.Schema; 

const UserSchema = new Schema({
  lastname: {type: String, required: true},
  firstname: {type: String, required: true},
  password: {type: String, required: true},
  avatar: {type: String},
  placeofwork: {type: String},
  areaofwork: {type: String},
  categories: {type: String},
  competencies: {type: String},
  email: {type: String, required: true},
  description: {type: String},
  experiences: {type: String},
  date: {type: Date, default: Date.now},
});

module.exports = User = mongoose.model("users", UserSchema);
