const { getAll } = require('../../controllers/proyects.controller');

const router = require('express').Router();

router.get('/', getAll);

module.exports = router;