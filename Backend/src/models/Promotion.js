const { Schema, model } = require('mongoose');

const PromotionSchema = new Schema({
    type: {
        type: String,
        required: true
    },
    discountType: {
        type: String,
        required: true
    },
    discount: {
        type: Number,
        required: true
    },
    beginDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },

    //dependent on type of promotion
    products: [{
        product: {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        },
        quantity: {
            type: Number,
        }
    }],
    customers: [{
        type: Schema.Types.ObjectId,
        ref: 'Customer'
    }],
    triggerValue: {
        type: Number,
    }
    //dependent on type of promotion

}, {
    timestamps: true
});

module.exports = model('Promotion', PromotionSchema);
