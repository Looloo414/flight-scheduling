const router = require("express").Router();
const usersCtrl = require("../controllers/users");

router.get("/", isLoggedIn, usersCtrl.index);
router.put("/:id", isLoggedIn, usersCtrl.update)
router.get("/:id", isLoggedIn, usersCtrl.showProfile)
router.get("/:id/edit", isLoggedIn, usersCtrl.edit)


function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

module.exports = router;