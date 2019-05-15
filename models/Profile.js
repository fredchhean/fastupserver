const mongoose = require ('mongoose');  
const Schema = mongoose.Schema; 

const ProfileSchema = new Schema({
  user: {
    type:Schema.Types.ObjectId,
    ref:"users",
  },
  handle:{type:String, default:"sszAAzaa"},
  title: {type: String, required: true, default:"managerz"},
  tagline:{type:String, required:true, default:"taglinedelamortquitue"},
  linkedin: {type:String, default:"nolkd"},
  github: {type:String},
  dribble: {type:String},
  personalwebsite: {type:String},
  other1: {type:String},
  heroexperience:{type:String},
  languages: [{type: String}],
  skills: [{type: String}],
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);