// controllers/flightController.js
const Flight = require('../models/flight');

exports.getAllFlights = async (req, res) => {
    try {
        const flights = await Flight.find();
        res.render('flights/index', { flights });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};

exports.getNewFlightForm = (req, res) => {
    res.render('flights/new');
};

exports.createFlight = async (req, res) => {
    try {
        await Flight.create(req.body);
        res.redirect('/flights');
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};




exports.getFlightDetails = async (req, res) => {
  const { id } = req.params;
  try {
    const flight = await Flight.findById(id).populate('destinations');
    if (!flight) {
      return res.status(404).send('Flight not found');
    }
    res.render('flights/show', { flight });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};



























// // controllers/flightController.js
// const Flight = require('../models/flight');

// exports.getAllFlights = async (req, res) => {
//     try {
//         const flights = await Flight.find();
//         res.render('flights/index', { flights });
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Server Error');
//     }
// };

// exports.getFlightDetails = async (req, res) => {
//     try {
//         const flight = await Flight.findById(req.params.id);
//         res.render('flights/show', { flight });
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Server Error');
//     }
// };

// exports.getNewFlightForm = (req, res) => {
//     res.render('flights/new');
// };

// exports.createFlight = async (req, res) => {
//     try {
//         await Flight.create(req.body);
//         res.redirect('/flights');
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Server Error');
//     }
// };
