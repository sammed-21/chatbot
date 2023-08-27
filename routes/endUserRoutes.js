const express = require("express");

const router = express.Router();
const EndUserControllers = require("../controllers/EndUserControllers");



router.post("/", EndUserControllers.createEndUser);
router.get("/", EndUserControllers.getAllEndUsers);
router.get("/:endUserId", EndUserControllers.getEndUserById);
router.put("/:endUserId", EndUserControllers.updateEndUser);
router.delete("/:endUserId", EndUserControllers.deleteEndUser);
module.exports = router;


// POST /endusers - Register a new end user
// GET /endusers - List all end users
// GET /endusers/:endUserId - Retrieve details of a single end user
// PUT /endusers/:endUserId - Update end user details
// DELETE /endusers/:endUserId - Delete an end user