const router = require('express').Router();
const controller = require('../controllers/countriesController');

router.get('/:country', controller.get_country);
router.post('/', controller.post_country);
  
module.exports = router;