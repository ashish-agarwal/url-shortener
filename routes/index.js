const express = require('express');
const router = express.Router();
const shortid = require('shortid');


const baseUrl = 'http://localhost:3000/';
const urlCodes = {};

/* GET home page. */
router.get('/', (req, res, next) => {

  const longUrl = req.query.url || req.body.url;

  if (!longUrl) {
    return res.send({ message: 'No url found to shorten' });
  } else if (urlCodes[longUrl]) {
    return res.send({ result: `${baseUrl}/${urlCodes[longUrl]}` });
  }

  const urlCode = shortid.generate();

  urlCodes[longUrl] = urlCode;

  return res.send({ result: `${baseUrl}/${urlCodes[longUrl]}` });
});

module.exports = router;
