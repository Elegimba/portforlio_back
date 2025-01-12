const router = require('express').Router();

router.use('/form', require('./api/form.routes'));
router.use('/exp', require('./api/exp.routes'));
router.use('/proyects', require('./api/proyects.routes'));

module.exports = router;