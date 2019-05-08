const mongoose = require ("mongoose");  
const Schema = mongoose.Schema; 

const UserSchema = new Schema({
  lastname: {type: String, required: true},
  firstname: {type: String, required: true},
  password: {type: String, required: true},
  avatar: {type: String},
  email: {type: String, required:true}
});

module.exports = User = mongoose.model("users", UserSchema);
