const { User, Thought } = require("../../models");

const getAllThoughts = async (req, res) => {
  try {
    const thought = await Thought.find({});

    return res.json({ data: thought });
  } catch (error) {
    console.log(`[Error]: Could not get thoughts | ${error.message}`);
  }
};

const getThoughtsById = () => {};

const createThought = () => {};

const updateThought = () => {};

const deleteThought = (req, res) => {
    try {
        const { id } = req.params;
        await Thought.findByIdAndDelete(id);
        return res.json({ success: true })
    } catch (error) {
        console.log(`[Error]: Could not delete thought | ${error.message}`);
    }
};
