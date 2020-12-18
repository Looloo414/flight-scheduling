const Aircraft = require('../models/aircraft');
// const Schedule = require('../models/Schedule');

module.exports = {
    new: newAircraft,
    addToAircrafts,
    create,
    index,
    delete: deleteAircraft,
    show,
    update
}
function newAircraft(req, res) {
    Aircraft.findByIdAndUpdate({}, (err, aircrafts) => {
        res.render('aircrafts/index', { title: 'Add new aircraft', aircrafts });

    })
}
function addToAircrafts(req, res) {
    Schedule.findById(req.params.id, function(err, schedule) {
      schedule.aircrafts.push(req.body.aircraft)
      schedule.save(function(err) {
        res.redirect(`/schedules/${schedule._id}`)
      })
    })
  }
function create(req, res) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key]
    }
    req.body.multiEngine = req.body.multiEngine === 'on' ? true : false
    const aircraft = new Aircraft(req.body)
    aircraft.save(function (err, aircraft) {
        res.redirect('/aircrafts')
    })

};
function index(req, res) {
    Aircraft.find({}, function (err, aircrafts) {
        res.render('aircrafts/index', { title: "All Aircrafts", aircrafts: aircrafts })
    })
}
function deleteAircraft(req, res) {
    console.log('delete', deleteAircraft)
    Aircraft.findByIdAndDelete(req.params.id, (err, aircraft) => {
        res.redirect('/aircrafts')
    })
}
function show(req, res) {
    Aircraft.findById(req.params.id)
        .then(() => {
            res.render('aircrafts/show', { title: 'Aircraft Detail', aircraft })
        })
}

function update(req, res) {
    req.body.multiEngine = req.body.multiEngine === "on" ? true : false
    Aircraft.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(() => {
        res.redirect('/aircrafts')
    })
}
  