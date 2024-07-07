const express = require('express');
const app = express();

app.use(express.json()); // To parse JSON bodies

// Middleware for validating user registration data
function validateRegistration(req, res, next) {
    const { firstName, lastName, password, email, phoneNumber } = req.body;

    const errors = [];

    // Validate first name
    if (!firstName || firstName[0] !== firstName[0].toUpperCase()) {
        errors.push('First name must start with a capital letter.');
    }

    // Validate last name
    if (!lastName || lastName[0] !== lastName[0].toUpperCase()) {
        errors.push('Last name must start with a capital letter.');
    }

    // Validate password
    const passwordRegex = /^(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*]{8,}$/;
    if (!password || !passwordRegex.test(password)) {
        errors.push('Password must be at least 8 characters long and contain at least one special character, one uppercase letter, and one numeric character.');
    }

    // Validate email
    if (!email || !email.includes('@')) {
        errors.push('Email address must contain "@" symbol.');
    }

    // Validate phone number
    const phoneNumberRegex = /^\d{10,}$/;
    if (!phoneNumber || !phoneNumberRegex.test(phoneNumber)) {
        errors.push('Phone number must be at least 10 digits long.');
    }

    // If there are any errors, pass them to the error handling middleware
    if (errors.length > 0) {
        return next({ errors });
    }

    next();
}

// User registration route
app.post('/register', validateRegistration, (req, res) => {
    console.log('Request received:', req.body);
    // If the request passes validation, proceed with registration logic
    res.status(201).send('User registered successfully!');
});

// Error handling middleware
app.use((err, req, res, next) => {
    if (err.errors) {
        res.status(400).json({
            status: 'error',
            errors: err.errors
        });
    } else {
        res.status(500).json({
            status: 'error',
            message: 'An internal server error occurred.'
        });
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
