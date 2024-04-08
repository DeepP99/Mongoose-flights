// routes/flightRoutes.js
const express = require('express');
const flightController = require('../controllers/flightController');
const destinationController = require('../controllers/destinationController');
const ticketController = require('../controllers/ticketController');
const ticketRoutes = require('./ticketRoutes'); 

const router = express.Router();

router.get('/', flightController.getAllFlights);
router.get('/new', flightController.getNewFlightForm);
router.post('/', flightController.createFlight);

router.get('/:id', flightController.getFlightDetails);
router.post('/:id/destinations', destinationController.addDestination);

// Ticket routes
router.get('/:id/tickets/new', ticketController.getNewTicketForm);
router.post('/:id/tickets', ticketController.createTicket);

module.exports = router;
