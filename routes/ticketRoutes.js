




// // ticketRoutes.js

// const express = require('express');
// const router = express.Router();

// // Define routes for ticket-related operations
// router.get('/new', (req, res) => {
//     // Render the ticket creation form
//     res.render('tickets/new');
// });

// router.post('/', (req, res) => {
//     // Logic to handle ticket creation
// });

// module.exports = router;





// // routes/ticketRoutes.js

// const express = require('express');
// const ticketController = require('../controllers/ticketController');

// const router = express.Router();

// // Route to render the form for creating a new ticket
// router.get('/new', ticketController.getNewTicketForm);

// // Route to handle the creation of a new ticket
// router.post('/', ticketController.createTicket);

// module.exports = router;


// routes/ticketRoutes.js
const express = require('express');
const ticketController = require('../controllers/ticketController');

const router = express.Router();

router.get('/new', ticketController.getNewTicketForm);

// Route for getting details of a ticket
router.get('/:id', ticketController.getTicketDetails);

// Route for creating a new ticket
router.post('/', ticketController.createTicket);

module.exports = router;


