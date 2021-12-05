const express = require('express');
const { PostUser } = require('../controllers');

const router = express.Router();

router.post('/', PostUser);

module.exports = router;