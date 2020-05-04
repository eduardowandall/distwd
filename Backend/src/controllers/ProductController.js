const axios = require('axios');
const Product = require('../models/Product');

module.exports = {
    async store(req, res) {
        const { barcode, name, price, priceBought } = req.body;

        if (barcode && barcode.length != 13) {
            return res.status(400).json({ error: "Barcode is not valid" });
        }

        var productExists;
        if (barcode)
            productExists = await Product.findOne({ barcode: barcode });
        else
            productExists = await Product.findOne({ name: name.toUpperCase() });


        if (productExists) {
            return res.json(productExists);
        }

        const prod = await Product.create({
            barcode,
            name: name.toUpperCase(),
            price,
            priceBought
        });

        return res.json(prod);
    },

    async index(req, res) {
        const { barcode } = req.params;

        const product = await Product.findOne({ barcode: barcode });

        return res.json(product);
    }
};