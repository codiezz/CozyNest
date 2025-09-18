const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
    items: [
        {
            name: String,
            price: Number,
            quantity: Number,
        },
    ],
    totalAmount: Number,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Purchase = mongoose.model('Purchase', purchaseSchema);
module.exports = Purchase;
