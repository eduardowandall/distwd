const axios = require('axios');
const Customer = require('../models/Customer');

module.exports = {
    async store(req, res) {
        const { barcode, name, phoneNumber, birthday, address } = req.body;

        const customerExists = await Customer.findOne({ phoneNumber: phoneNumber });

        if (customerExists) {
            return res.json(customerExists);
        }

        const customer = await Customer.create({
            barcode,
            name,
            phoneNumber,
            birthday,
            address
        });

        return res.json(customer);
    },

    async index(req, res) {
        const { barcode } = req.params;

        const customer = await Customer.findOne({ barcode: barcode });

        return res.json(customer);
    },

    async update(req, res) {
        const { barcode } = req.params;
        const { name, birthday, address } = req.body;

        var customer;
        if (barcode)
            customer = await Customer.findOne({ barcode: barcode });
        // if (!customer && phoneNumber)
        //     customer = await Customer.findOne({ phoneNumber: phoneNumber });

        if (customer) {
            customer.name = name;
            customer.birthday = birthday;
            customer.address = address;
            customer.save();
            return res.json(customer);
        }
        else
            return res.status(404).json({ error: "Could not find the customer" });
    }
};