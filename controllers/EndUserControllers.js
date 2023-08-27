const Chatbot = require("../models/Chatbot");

const EndUser = require("../models/EndUser");

const EndUserControllers = {
    createEndUser: async (req, res) => {
    const { name, email } = req.body;
    

    try {
      const enduser = await EndUser.create({name,email});

      // if (!chatbot) {
      //   return res.status(404).json({ error: "Chatbot not found" });
      // }

      return res.status(200).json(enduser);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Server error" });
    }
  },

  getAllEndUsers: async (req, res) => {
    try {
      const endUsers = await EndUser.findAll();
      return res.status(200).json(endUsers);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  },

  getEndUserById: async (req, res) => {
    try {
      const endUserId = req.params.endUserId;
      const endUser = await EndUser.findByPk(endUserId);
      if (!endUser) {
        return res.status(404).json({ message: 'End user not found' });
      }
      return res.status(200).json(endUser);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  },
  updateEndUser: async (req, res) => {
    try {
      const endUserId = req.params.endUserId;
      const { name, email } = req.body;

      const endUser = await EndUser.findByPk(endUserId);
      if (!endUser) {
        return res.status(404).json({ message: 'End user not found' });
      }

      endUser.name = name;
      endUser.email = email;
      await endUser.save();

      return res.status(200).json(endUser);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  },
  deleteEndUser: async (req, res) => {
    try {
      const endUserId = req.params.endUserId;
      const endUser = await EndUser.findByPk(endUserId);
      if (!endUser) {
        return res.status(404).json({ message: 'End user not found' });
      }

      await endUser.destroy();

      return res.status(204).send({message:"user have been deleted"});
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  },
  
}

module.exports = EndUserControllers;
