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



const createUser = (req, res) => {};

const updateUser = (req, res) => {};

const deleteUser = (req, res) => {};


module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
  };