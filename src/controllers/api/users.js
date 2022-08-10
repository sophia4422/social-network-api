const { User, Thought } = require("../../models");

const getAllUsers = (req, res) => {  
    try {
        const users = await User.find({});

        return res.json({ data: users });
        } catch (error) {
        console.log(`[Error]: Failed to get all users | ${error.message}`);
    }
};

const getUserById = (req, res) => {};

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