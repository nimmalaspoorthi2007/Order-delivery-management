const express = require("express");
const Order = require("../models/Order");

const router = express.Router();


// PLACE ORDER
router.post("/", async (req, res) => {

  try {

    const { userId, items, totalAmount } = req.body;

    const order = await Order.create({
      userId,
      items,
      totalAmount,
      status: "Order Placed"
    });

    res.status(201).json(order);

  } catch (error) {

    res.status(500).json({
      message: "Server Error"
    });

  }

});


// GET USER ORDERS
router.get("/:userId", async (req, res) => {

  try {

    const orders = await Order.find({
      userId: req.params.userId
    }).sort({ createdAt: -1 });

    res.json(orders);

  } catch (error) {

    res.status(500).json({
      message: "Server Error"
    });

  }

});


// ADMIN GET ALL ORDERS
router.post("/admin/all", async (req, res) => {

  try {

    const { role } = req.body;

    if (role !== "admin") {
      return res.status(403).json({
        message: "Only admin can view orders"
      });
    }

    const orders = await Order.find().sort({
      createdAt: -1
    });

    res.json(orders);

  } catch (error) {

    res.status(500).json({
      message: "Server Error"
    });

  }

});


// ADMIN UPDATE STATUS
router.put("/admin/status/:id", async (req, res) => {

  try {

    const { status, role } = req.body;

    if (role !== "admin") {
      return res.status(403).json({
        message: "Only admin can update status"
      });
    }

    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    res.json(updatedOrder);

  } catch (error) {

    res.status(500).json({
      message: "Server Error"
    });

  }

});


module.exports = router;