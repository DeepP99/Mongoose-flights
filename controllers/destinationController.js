const Flight = require('../models/flight');


exports.addDestination = async (req, res) => {
    const { id } = req.params;
    const { airport, arrival } = req.body;
    try {
        console.log('Flight ID:', id);
        console.log('Destination Airport:', airport);
        console.log('Arrival Date:', arrival);

        // Attempt to find the flight
        const flight = await Flight.findById(id);
        if (!flight) {
            console.log('Flight not found');
            return res.status(404).send('Flight not found');
        }

        // Add destination to the flight
        flight.destinations.push({ airport, arrival });
        await flight.save();
        console.log('Destination added successfully');

        // Redirect back to the flight details page
        res.redirect(`/flights/${id}`);
    } catch (error) {
        console.error('Error adding destination:', error);
        res.status(500).send('Server Error');
    }
};
















