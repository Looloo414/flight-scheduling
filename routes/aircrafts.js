const router = require("express").Router();
const aircraftsCtrl = require('../controllers/aircrafts')


router.get('/new', aircraftsCtrl.new);
router.post('/', aircraftsCtrl.create);
router.get('/', aircraftsCtrl.index);
router.post('/schedules/:id/aircrafts', aircraftsCtrl.addToAircrafts);
router.put("/:id", aircraftsCtrl.update)
router.delete('/:id', aircraftsCtrl.delete)
router.get('/:id', aircraftsCtrl.show)


// function isLoggedIn(req, res, next) {
//     if (req.isAuthenticated()) return next();
//     res.redirect("/auth/google");
//   }

module.exports = router;