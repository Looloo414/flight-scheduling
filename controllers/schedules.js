const Aircraft = require('../models/aircraft');
const Schedule = require('../models/schedule');


module.exports = {
    new: newSchedule,
    create,
    index,
    delete: deleteSchedule,
    show
}
function newSchedule(req, res) {
    res.render('schedules/new', { title: "New Schedule", user: req.user });
};
function create(req, res) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key]
    }
    req.body.addedBy = req.user.name
    req.body.avatar = req.user.avatar
    const schedule = new Schedule(req.body)
    schedule.save(function (err, schedule) {
        res.redirect('/schedules')
    })
}

function index(req, res) {
    Aircraft.find({}, function (err, aircraft) {
        Schedule.find({}, function (err, schedules) {
            res.render('schedules/index', { title: "All Schedules", user: req.user, aircraft, schedules })
        })
    })
}
function deleteSchedule(req, res) {
    console.log('delete', deleteSchedule)
    Schedule.findByIdAndDelete(req.params.id, (err, schedule) => {
        res.redirect('/schedules')
    })
}
function show(req, res) {
    Schedule.findById(req.params.id)
        .populate('aircraft').exec((err, schedule) => {
            Aircraft.find({ _id: { $nin: schedule.aircraft } }, (err, aircraft) => {
                res.render('schedules/show', { title: "Schedule", user: req.user, schedule, aircraft })
            })
        })

}