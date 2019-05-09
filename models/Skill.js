const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SkillSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  dev: [{
    javascript :false, 
    //fulfill the rest
  }]
});

module.exports = Skill = mongoose.model("skills", SkillSchema);
