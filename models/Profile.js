const mongoose = require ('mongoose');  
const Schema = mongoose.Schema; 

const ProfileSchema = new Schema({
  user: {
    type:Schema.Types.ObjectId,
    ref:"users",
  },
  handle:{type:String, default:"sszAAzaa"},
  title: {type: String, required: true, default:"managerz"},
  // address: {
  //   streetnumber: {type: Number, required:true },
  //   street: {type: String, required:true },
  //   postcode: {type: Number, required:true, max:5},
  //   city: {type: Number, required:true}
  // },
  // phonenumber:{t ype:Number, required: true},
  tagline:{type:String, required:true, default:"taglinedelamortquitue"},
  // bio:{type:String, required:true},
  onlinepresence:{
     linkedin: {type:String},
     github: {type:String},
     dribble: {type:String},
     personalwebsite: {type:String},
     other1: {type:String},
     other2: {type:String},
     other3: {type:String}
    }
  ,
  // languages: {
  //   type:[String]
  // },
  // //TOCHANGE ONce we have skills schema built
  // skills : {type:Schema.Types.ObjectId, ref:"skills",},
  skills: [{type: String}],
  // placeofwork: {type: String},
  // areaofwork: {type: String},
  // description: {type: String},
  // experiences: {type: String},
  // date: {type: Date, default: Date.now},
  // heroexperience: [
  //   {
  //     title:{type:String, required: true},
  //     // context:{type:String, required: true},
  //     // herostory:{type:String, required: true},
  //   }
  // ],
  // availability:{type:Date},
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);