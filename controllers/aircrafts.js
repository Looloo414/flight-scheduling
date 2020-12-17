const Aircraft = require('../models/aircraft');
// const Schedule = require('../models/Schedule');

module.exports = {
    new: newAircraft,
    create,
    index,
    delete: deleteAircraft,
    // show
}
function newAircraft(req, res) {
    res.render('aircrafts/index', { title: 'Add new aircraft', err: '' });
};
function create(req, res) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key]
    }
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
// function show(req, res) {
//     Aircraft.findById(req.params.id)
//     .populate('schedules').exec((err, aircraft) => {
//       Schedule.find({_id: {$nin: aircraft.schedules}}, (err, schedules) => {
//           console.log(aircraft, 'aircraft console')
//         res.render('aircrafts/show', {title: 'Aircraft Detail', aircraft, schedules})
//       })
//     })
//   }