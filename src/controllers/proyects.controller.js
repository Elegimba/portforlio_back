const Proyects = require('../models/proyects.model');

const getAll = async (req, res, next) => {
    try {
        const proyects = await Proyects.find();
        res.json(proyects);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getAll
}