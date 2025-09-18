const express = require('express');
const router = express.Router();
const Cart = require('../model/Purchase');

// Route to save the cart data
router.post('/api/checkout', async (req, res) => {
    const { cartItems, totalAmount } = req.body;

    if (!cartItems || !totalAmount) {
        return res.status(400).json({ message: 'Invalid cart data' });
    }

    try {
        // Create and save a new cart entry
        const newCart = new Cart({
            items: cartItems,
            totalAmount: totalAmount
        });

        await newCart.save(); // Save the cart data to MongoDB

        res.status(200).json({ message: 'Cart saved successfully', cart: newCart });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error saving cart' });
    }
});

// Route to retrieve the most recent cart
router.get('/api/cart', async (req, res) => {
    try {
        // Fetch the most recent cart from the database
        const cart = await Cart.findOne().sort({ createdAt: -1 }).limit(1);
        if (!cart) {
            return res.status(404).json({ message: 'No cart found' });
        }

        res.status(200).json({ cart });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching cart' });
    }
});

module.exports = router;
