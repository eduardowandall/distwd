const { Schema, model } = require('mongoose');

const CustomerSchema = new Schema({
    phoneNumber: {
        type: String,
        required: true
    },
    barcode: {
        type: String,
        required: true
    },
    name: {
        type: String
    },
    birthday: {
        type: Date
    },
    address: {
        type: String
    },
}, {
    timestamps: true
});

module.exports = model('Customer', CustomerSchema);
