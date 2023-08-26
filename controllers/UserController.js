const { useCallback } = require("react");
const User = require("../models/User");

const UserController = {
  getUsers: async (req, res) => {
    try {
      console.log("inside getalluser");
      const users = await User.findAll();
      res.status(200).json({ users });
    } catch (error) {
      res.status(500).json({ message: "Error fetching users" });
    }
  },

  createUser: async (req, res) => {
    try {
      console.log("users router gate or User model");
      await User.create(req.body);
      console.log("user is created");
      return res.json("user is created");
    } catch (error) {
      res.status(500).json({ message: "Error fetching users" });
    }
  },
};

module.exports = UserController;
