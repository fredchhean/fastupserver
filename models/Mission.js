const mongoose = require ("mongoose");  
const Schema = mongoose.Schema; 

const MissionSchema = new Schema({
  project: {type: String, required: true},
  team: [
    {member: {type: Schema.types.ObjectId, ref:"users"}}
  ],
  skills : {type: Schema.types.ObjectId, ref:"skills"},
  dateofstart:{type:Date, required:true},
  dateofend:{type:Date},
  description: {type:String},
  wayofworking: {type:String},
  afterfastup: {type:String},
});

module.exports = Mission = mongoose.model("missions", MissionSchema);

