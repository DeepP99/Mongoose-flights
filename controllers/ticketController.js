// controllers/ticketController.js


// Import the Ticket model
const Ticket = require('../models/ticket');

// Controller function to render the new ticket form
exports.getNewTicketForm = (req, res) => {
    // Extract the flightId from the request parameters
    const { flightId } = req.params;
    
    // Logic to render the new ticket form with flightId
    res.render('tickets/new', { flightId });
};


// Controller function to create a new ticket
exports.createTicket = async (req, res) => {
    try {
        // Extract data from request body
        const { passengerName, seatNumber } = req.body;

        // Create a new ticket
        const ticket = await Ticket.create({ passengerName, seatNumber });

        // Redirect to the ticket details page
        res.redirect(`/tickets/${ticket._id}`);
    } catch (error) {
        console.error('Error creating ticket:', error);
        res.status(500).send('Server Error');
    }
};



// Controller function to get details of a ticket
exports.getTicketDetails = async (req, res) => {
    try {
        // Extract ticket ID from request parameters
        const { id } = req.params;

        // Find the ticket by ID
        const ticket = await Ticket.findById(id);

        // Render the ticket details page
        res.render('tickets/show', { ticket });
    } catch (error) {
        console.error('Error fetching ticket details:', error);
        res.status(500).send('Server Error');
    }
};



