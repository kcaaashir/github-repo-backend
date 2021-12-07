const router = require('express').Router();
const githubRouter = require('./github');


router.use('/api/v1/github', githubRouter);

module.exports = router;