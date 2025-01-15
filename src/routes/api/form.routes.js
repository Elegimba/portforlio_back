const { getAll } = require('../../controllers/form.controller');

const router = require('express').Router();

router.get('/', getAll);

module.exports = router;