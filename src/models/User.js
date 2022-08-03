const { Schema } = require("mongoose");

const userSchema = {
  username: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 20,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 50,
    unique: true,
    trim: true,
    match: [/.+@.+\..+/],
  },
  thoughts: [{}],
  friends: [{}],
};

const schema = new Schema(userSchema);

const User = model("User", schema);

module.exports = User;
