const router = require('express').Router();

router.use('/form', require('./api/form.routes'));
router.use('/exp', require('./api/exp.routes'));

module.exports = router;