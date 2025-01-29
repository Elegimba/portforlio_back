const Experience = require('../models/exp.model');

const getAll = async (req, res, next) => {
    try {
        const exp = await Experience.find().sort({ createdAt: -1 });
        res.json(exp);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getAll
}