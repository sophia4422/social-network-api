const { Schema } = require("mongoose");

const thoughtSchema = {
  thoughtText: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 280,
  },
  createdAt: {},
  username: {},
  reactions: {},
};

const schema = new Schema(thoughtSchema);

const Thought = model("Thought", schema);

module.exports = Thought;
