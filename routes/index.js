const express = require('express');
const router = express.Router();


/* GET home page. */
router.get('/', (req, res, next) => {
  return res.send('Hello');
});

module.exports = router;
