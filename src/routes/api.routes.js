const router = require('express').Router();

router.use('/form', require('./api/form.routes'));

module.exports = router;