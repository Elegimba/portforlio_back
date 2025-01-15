const Experience = require('../models/exp.model');

const getAll = async (req, res, next) => {
    try {
        const exp = await Experience.find();
        res.json(exp);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getAll
}