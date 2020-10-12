const router = require('express').Router();

router.get('/', (req, res, next) => {
  res.render('search');
});

module.exports = router;