const { User, Thought } = require("../../models");

const getAllUsers = (req, res) => {  
    try {
        const users = await User.find({});

        return res.json({ data: users });
        } catch (error) {
        console.log(`[Error]: Failed to get all users | ${error.message}`);
    }
};

const getUserById = (req, res) => {
    try {
        const { id } = req.params;
    
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ success: false });
        }

        return res.json({ data: user});
    } catch (error) {
        console.log(`[Error]: Failed to get the user | ${error.message}`); 
    }
}



const createUser = (req, res) => {
    try {
        const { userName, email } = req.body;
    
        if (userName && email) {
          await User.create({ userName, email });
          return res.json({ success: true });
        } else {
          return res.status(400).json({
            success: false,
            error: `Please enter valid username and email`,
          });
        }
      } catch (error) {
        console.log(`[ERROR]: could not create new user | ${error.message}`);
        return res.status(500).json({ success: false, error: error.message });
      }
};

const updateUser = (req, res) => {
    try {
        const { id } = req.params;
        const { userName, email } = req.body;
        if (userName || email) {
          await User.findByIdAndUpdate(id, {
            userName,
            email,
          });
          return res.json({ success: true });
        } else res.status(500).json({ success: false });
      } catch (error) {
        console.log(`[ERROR]: could not update user | ${error.message}`);
        return res.status(500).json({ success: false, error: error.message });
      }
};

const deleteUser = (req, res) => {
    const { id } = req.params;
    try {
      const user = await User.findById(id);
      const userThoughts = user.thoughts;
      console.log(userThoughts);
      await Thoughts.deleteMany({ _id: userThoughts });
  
      try {
        await User.findByIdAndDelete(id);
        return res.json({ success: true });
      } catch (error) {
        console.log(`[ERROR]: could not delete user | ${error.message}`);
        return res.status(500).json({ success: false, error: error.message });
      }
    } catch (error) {
      console.log(`[Error]: could not get user | ${error.message}`);
      return res.status(500).json({ success: false, error: error.message });
    }
};


module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
  };