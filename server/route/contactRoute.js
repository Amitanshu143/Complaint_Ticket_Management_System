const express = require("express");
const { AddContact, getAllContacts, deleteContact } = require("../controller/contactController");
const { protect, adminOnly } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/add", AddContact);
router.get("/all", protect, adminOnly, getAllContacts); // Admin
router.delete("/:id", protect, adminOnly, deleteContact); // Admin

module.exports = router;
