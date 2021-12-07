const router = require('express').Router();
const { catchAsync } = require('../helpers/error');
const { readRepo } = require('../controller/github');

router.get('/read', catchAsync(readRepo));


module.exports = router;

