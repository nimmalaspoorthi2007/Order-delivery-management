const express = require("express");
const Food = require("../models/Food");

const router = express.Router();

// GET ALL FOODS
router.get("/", async (req, res) => {
  try {
    const foods = await Food.find();
    res.json(foods);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// ADD FOOD - ADMIN ONLY
router.post("/", async (req, res) => {
  try {
    const { name, price, image, category, role } = req.body;

    if (role !== "admin") {
      return res.status(403).json({
        message: "Only admin can add food"
      });
    }

    const food = await Food.create({
      name,
      price,
      image,
      category
    });

    res.status(201).json(food);
  } catch (error) {
    res.status(500).json({ message: "Food add failed" });
  }
});

module.exports = router;