const router = require('express').Router();
const controller = require('../controllers/allController');

router.get('/', controller.list_all);
  
module.exports = router;