var router = require('express').Router();

router.use('/address', require('./address'));

module.exports = router;