const User = require("../models/User");

const UserController = {
  // @Desc get all users
  // @route GET /users
  // @public
  getUsers: async (req, res) => {
    try {
      console.log("inside getalluser");
      const users = await User.findAll();
      res.status(200).json({ users });
    } catch (error) {
      res.status(500).json({ message: "Error fetching users" });
    }
  },

  // @Desc create new users
  // @route Post /users
  // @public

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

  // @Desc get users by id
  // @route get /users/:id
  // @public

  getUserById: async (req, res) => {
    try {
      const userId = req.params.id;
      const user = await User.findByPk(userId);

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      return res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: "Error fetching users" });
    }
  },

  // @Desc PUT users by id
  // @route PUT /users/:id
  // @public

  updateUserById: async (req, res) => {
    try {
      const userId = req.params.id;
      const reqs = req.body;

      //   const user = await User.findByPk(userId);
      const user = await User.findByPk(userId);
      if (!user) {
        res.status(400).json({ message: "User not found" });
      }
      user.username = reqs.username;
      user.email = reqs.email;
      user.save();

      //   if (!user) {
      //     return res.status(404).json({ message: "User not found" });
      //   }
      return res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: "Error fetching users" });
    }
  },
  findUserByIdAndDelete: async (req, res) => {
    try {
      const userId = req.params.id;
  

        const user = await User.findByPk(userId);
      
      if (!user) {
        res.status(400).json({ message: "User not found" });
      }
      
        user.destroy();

      //   if (!user) {
      //     return res.status(404).json({ message: "User not found" });
      //   }
      return res.status(200).json({message:"user is been deleted"});
    } catch (error) {
      res.status(500).json({ message: "Error fetching users" });
    }
  },
};

module.exports = UserController;
