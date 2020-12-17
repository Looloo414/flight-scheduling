const router = require("express").Router();
const aircraftsCtrl = require('../controllers/aircrafts')


router.get('/new', aircraftsCtrl.new);
router.post('/', aircraftsCtrl.create);
router.get('/', aircraftsCtrl.index);
router.delete('/:id', aircraftsCtrl.delete)


// function isLoggedIn(req, res, next) {
//     if (req.isAuthenticated()) return next();
//     res.redirect("/auth/google");
//   }

module.exports = router;