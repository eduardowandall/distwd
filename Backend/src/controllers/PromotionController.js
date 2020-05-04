const axios = require('axios');
const Promotion = require('../models/Promotion');

const discountTypes = {
    "percentage": true,
    "price": true,
    "payXtakeY": true
}
const promotionTypes = {
    "quantityOfProducts": true,
    "customer": true,
    "everyOrder": true,
    "priceOfOrder": true
}

module.exports = {
    async store(req, res) {
        const {
            type,
            discountType,
            discount,
            beginDate,
            endDate,
            products,
            customers,
            triggerValue
        } = req.body;

        if (!promotionTypes[type])
            return res.status(400).json({ error: "Promotion type does not exists" });

        if (!discountTypes[discountType])
            return res.status(400).json({ error: "Discount type does not exists" });


        const promo = await Promotion.create({
            type,
            discountType,
            discount,
            beginDate,
            endDate,
            products,
            customers,
            triggerValue
        });

        return res.json(promo);
    },

    async index(req, res) {
        
        const currentDate = new Date();

        const users = await Promotion.find({
            $and: [
                { beginDate: { $lt: currentDate } },
                { endDate: { $gt: currentDate } },
            ]
        });
        return res.json(users);
    }
};
