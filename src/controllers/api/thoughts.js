const { User, Thought } = require("../../models");

const getAllThoughts = async (req, res) => {
  try {
    const thought = await Thoughts.find({});

    return res.json({ data: thought });
  } catch (error) {
    console.log(`[Error]: Could not get thoughts | ${error.message}`);
  }
};

const getThoughtsById = () => {};

const createThought = () => {};

const updateThought = () => {};

const deleteThought = () => {};
