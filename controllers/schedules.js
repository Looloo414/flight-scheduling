const Aircraft = require('../models/aircraft');
const Schedule = require('../models/Schedule');
const User = require('../modelsSchedule')

module.exports = {
    new: newSchedule,
    create,
    index,
    delete: deleteSchedule,
    show
}
 function newSchedule(req, res) {
     res.render('schedules/new', {title: 'Add New Schedule', err: ''});
 };
 function create(req, res) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key]
    }
    const schedule = new Schedule(req.body)
    schedule.save(function(err, schedule) {
        res.redirect('/schedules') 
    })

 };
 function index(req, res) {
     Schedule.find({}, function(err, schedules) {
         res.render('schedules/index', {title: "All Schedules", schedules: schedules})
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
    .populate('schedules').exec((err, schedules) => {
      User.find({_id: {$nin: schedules.user}}, (err, users) => {
          console.log(schedule, 'schedule console')
        res.render('schedules/show', {title: 'Schedule Detail', schedules, users})
      })
    })
  }