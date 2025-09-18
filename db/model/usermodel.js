const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    contact: { type: String, required: true },
    city: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    purchases: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Purchase',
        }
    ]
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;
