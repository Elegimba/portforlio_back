const { getAll } = require('../../controllers/exp.controller');

const router = require('express').Router();

router.get('/', getAll);

module.exports = router;