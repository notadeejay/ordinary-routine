const express = require('express');
const router = express.Router();
const db = require('../queries/queries')

/* GET users listing. */
router.get('/', db.getCategories);

module.exports = router;