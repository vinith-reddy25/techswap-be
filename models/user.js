var mongoose = require("mongoose");
var schema = mongoose.Schema;
var UserSchema = new schema({
  Institute: {
    type: String,
    trim: true,
    default: null,
  },
  Name: {
    type: String,
    trim: true,
    default: null,
  },

  Mobile: {
    type: Number,
    default: null,
    required: true,
    unique: true,
  },
  Department: {
    type: String,
    trim: true,
    default: null,
  },
  Date: {
    type: Date,
    trim: true,
    default: null,
  },
  State: {
    type: String,
    trim: true,
    default: null,
  },
});
module.exports = mongoose.model("User", UserSchema);
