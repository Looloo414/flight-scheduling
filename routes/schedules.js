var express = require('express');
var router = express.Router();
const schedulesCtrl = require('../controllers/schedules')


router.get('/new', schedulesCtrl.new);
router.get('/', schedulesCtrl.index);
router.post('/', schedulesCtrl.create);
router.delete('/:id', schedulesCtrl.delete);
router.get('/:id', schedulesCtrl.show);

module.exports = router;