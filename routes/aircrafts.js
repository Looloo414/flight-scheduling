var express = require('express');
var router = express.Router();
const aircraftsCtrl = require('../controllers/aircrafts')


router.get('/new', aircraftsCtrl.new);
router.post('/', aircraftsCtrl.create);
router.get('/', aircraftsCtrl.index);
router.delete('/:id', aircraftsCtrl.delete);
router.get('/:id', aircraftsCtrl.show);

module.exports = router;