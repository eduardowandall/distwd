const { Schema, model } = require('mongoose');

const OrderSchema = new Schema({
    products: [{
        product: {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        },
        quantity: {
            type: Number,
        }
    }],
    promotions: [{
        type: Schema.Types.ObjectId,
        ref: 'Promotion'
    }],
    customer: {
        type: Schema.Types.ObjectId,
        ref: 'Customer'
    },
    paymentMethod: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

module.exports = model('Order', OrderSchema);
