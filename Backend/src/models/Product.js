const { Schema, model } = require('mongoose');

const ProductSchema = new Schema({
    barcode: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    priceBought: {
        type: Number
    },
}, {
    timestamps: true
});

module.exports = model('Product', ProductSchema);
