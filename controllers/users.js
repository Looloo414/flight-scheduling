// const Schedule = require('../models/schedule');
const User = require('../models/user');

module.exports = {
    index,
    showProfile,
    show,
    edit,
    update

}
function index(req, res) {
    User.find({}).then((users) => {
        res.render("users/index", { title: "User Index", user: req.user, users });
    });
}

function showProfile(req, res) {
    User.findById(req.user._id)
        .then((user) => {
            res.render("users/profile", { title: "Profile Page", user })
        })
}

function edit(req, res) {
    console.log("hello")
    User.findById(req.user._id)
        .then((user) => {
            res.render("users/edit", { title: "Update User", user })
        })
}

function update(req, res) {
    req.user.licensesRatings.push(req.body.licensesRatings)
    req.user.hours = req.body.hours
    req.user.save(() => {
        res.redirect("/users/profile")
    })
}

function show(req, res) {
    User.findById(req.params.id)
        .then((userInfo) => {
            res.render("users/show", {
                title: "User Details",
                userInfo,
                user: req.user,
            })
        })
}



