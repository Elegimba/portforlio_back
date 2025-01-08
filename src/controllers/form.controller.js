const Formation = require('../models/form.model')

const getAll = async (req, res, next) => {
    try {
        const forms = await Formation.find();
        res.json(forms);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getAll
}