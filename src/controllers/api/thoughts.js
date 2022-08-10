const { User, Thought } = require("../../models");

const getAllThoughts = async (req, res) => {
  try {
    const thought = await Thought.find({});

    return res.json({ data: thought });
  } catch (error) {
    console.log(`[Error]: Could not get thoughts | ${error.message}`);
  }
};

const getThoughtsById = async (req, res) => {
  try {
    const { id } = req.params;

    const thought = await Thoughts.findById(id);

    if (!thought) {
      return res.status(404).json({ success: false });
    }

    return res.json({ data: thought });
  } catch (error) {
    console.log(`[Error]: could not get thought | ${error.message}`);
  }
};

const createThought = async (req, res) => {
  try {
    const { userName, thoughtText } = req.body;

    if (userName && thoughtText) {
      await Thoughts.create({ userName, thoughtText });
      return res.json({ success: true });
    } else {
      return res.status(400).json({
        success: false,
        error: `Please enter valid username and thought`,
      });
    }
  } catch (error) {
    console.log(`[ERROR]: could not create new thought | ${error.message}`);
    return res.status(500).json({ success: false, error: error.message });
  }
};

const updateThought = async (req, res) => {
  try {
    const { id } = req.params;
    const { userName, thoughtText } = req.body;
    if (userName || thoughtText) {
      await Thoughts.findByIdAndUpdate(id, {
        userName,
        thoughtText,
      });
      return res.json({ success: true });
    } else res.status(500).json({ success: false });
  } catch (error) {
    console.log(`[ERROR]: could not update thought | ${error.message}`);
    return res.status(500).json({ success: false, error: error.message });
  }
};

const deleteThought = async (req, res) => {
  try {
    const { id } = req.params;
    await Thought.findByIdAndDelete(id);
    return res.json({ success: true });
  } catch (error) {
    console.log(`[Error]: Could not delete thought | ${error.message}`);
  }
};

module.exports = {
  getAllThoughts,
  getThoughtsById,
  createThought,
  updateThought,
  deleteThought,
};
