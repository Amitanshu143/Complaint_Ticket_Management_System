const router = require("express").Router();
const { protect, adminOnly } = require("../middleware/authMiddleware");
const {
    getAllTickets,
    getAllUsers,
    deleteUser,
} = require("../controller/adminController");

// Existing
router.get("/tickets", protect, adminOnly, getAllTickets);

// ✅ New Route - Get All Users
router.get("/users", protect, adminOnly, getAllUsers);
router.delete("/users/:id", protect, adminOnly, deleteUser);

module.exports = router;
