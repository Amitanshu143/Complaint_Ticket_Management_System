const express = require("express");
const router = express.Router();
const Ticket = require("../models/Ticket");

// Admin Update Ticket Status
router.put("/admin/update-status/:id", async (req, res) => {
  try {
    const { status } = req.body;

    const ticket = await Ticket.findById(req.params.id);

    if (!ticket) {
      return res.status(404).json({ message: "Ticket not found" });
    }

    ticket.status = status;
    await ticket.save();

    res.json({
      message: "Ticket status updated successfully",
      ticket,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
