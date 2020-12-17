const Schedule = require('../models/schedule');
const User = require('../models/user');

module.exports = {
    index,
    showProfile,
    show,
    update

}
function index(req, res) {
    User.find({}).then((users) => {
        res.render("users/index", { title: "User Index", user: req.user, users });
    });
}

function showProfile(req, res) {
    User.findById(req.user._id)
    res.render("users/profile", { title: "Profile Page", user })
}

function update(req, res) {
    User.findByIdAndUpdate(req.user._id, req.body, {new: true})
    .then(() => {
      res.redirect("/users/profile")
    })
  }
  
  function show(req, res) {
    User.findById(req.params.id)
    .then((userInfo) => {
      Schedule.find({ added: userInfo._id })
      .then((schedules) => {
        res.render("users/show", {
          title: "User Details",
          userInfo,
          user: req.user,
          schedules
        })
      })
    })
  }



