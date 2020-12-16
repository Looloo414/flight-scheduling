const Schedule = require('../models/schedule');
const User = require('../models/user');

module.exports = {
    index,
    showProfile

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



