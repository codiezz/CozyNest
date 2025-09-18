const express = require('express');
const { createUser, getAllUsers } = require('../Controller/userController');
const Purchase = require('./models/Purchase');
const router = express.Router();

// Endpoint to register a user
router.post('/register', async (req, res) => {
    const { name, contact, city, email, password } = req.body;
    try {
        const newUser = new User({ name, contact, city, email, password });
        await newUser.save();
        res.status(201).send("User registered successfully");
    } catch (error) {
        res.status(500).send("Error registering user");
    }
});

// Endpoint for login (assuming simple validation for demo)
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (!user) {
        return res.status(401).send("Invalid credentials");
    }
    res.status(200).send({ message: "Login successful", userId: user._id });
});

// Endpoint to create a purchase
router.post('/purchase', async (req, res) => {
    const { userId, cartItems } = req.body;
    const totalAmount = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

    const newPurchase = new Purchase({
        items: cartItems,
        totalAmount,
        userId,
    });

    try {
        await newPurchase.save();
        const user = await User.findById(userId);
        user.purchases.push(newPurchase._id);
        await user.save();

        res.status(201).send({ message: "Purchase successful", purchase: newPurchase });
    } catch (error) {
        res.status(500).send("Error saving purchase");
    }
});

module.exports = router;