// models/ticket.js
const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    passengerName: {
        type: String,
        required: true
    },
    seatNumber: {
        type: String,
        required: true
    }
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;
