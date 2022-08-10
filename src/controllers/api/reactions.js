const { User, Thought } = require("../../models");

const createReactionForThought = (req, res) => {
    const { id } = req.params;
    const { reactionBody, userName } = req.body;
  
    try {
      if (reactionBody && userName) {
        await Thoughts.findOneAndUpdate(
          { _id: id },
          { $addToSet: { reactions: { reactionBody, userName } } },
          { new: true, runValidators: true }
        );
        return res.json({ success: true });
      } else {
        res.status(500).json({ success: false });
      }
    } catch (error) {
      console.log(`[ERROR]: could not add a new reaction | ${error.message}`);
      return res.status(500).json({ success: false, error: error.message });
    }
};

const removeReactionFromThought = (req, res) => {
    const { thoughtId, reactionId } = req.params;

    try {
      if (thoughtId && reactionId) {
        await Thoughts.findOneAndUpdate(
          { _id: thoughtId },
          { $pull: { reactions: { _id: reactionId } } },
          { new: true, runValidators: true }
        );
  
        return res.json({ success: true });
      } else res.status(500).json({ success: false });
    } catch (error) {
      console.log(`[ERROR]: could not delete the reaction | ${error.message}`);
      return res.status(500).json({ success: false, error: error.message });
    }
};

module.exports = { createReactionForThought, removeReactionFromThought };
