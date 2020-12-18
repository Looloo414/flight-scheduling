var express = require('express');
var router = express.Router();
const schedulesCtrl = require('../controllers/schedules')


router.get('/new', isLoggedIn, schedulesCtrl.new);
router.get('/', isLoggedIn, schedulesCtrl.index);
router.post('/', isLoggedIn, schedulesCtrl.create);
router.delete('/:id', isLoggedIn, schedulesCtrl.delete);
router.get('/:id', isLoggedIn, schedulesCtrl.show);

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

module.exports = router;