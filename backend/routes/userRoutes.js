const express = require("express");
const { protect } = require("../middlewares/authMiddleware");
const   { registerUser, authUser, updateUserProfile }   = require("../controllers/userControllers");

const router = express.Router();

router.route("/").post(registerUser);
router.post("/login", authUser);
router.route("/profile").post(protect, updateUserProfile);

module.exports = router;