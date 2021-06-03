const express = require('express');
const router = express.Router();
const acompanyRouter = require('../services/acompany');

/* GET programming languages. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await acompanyRouter.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});

module.exports = router;