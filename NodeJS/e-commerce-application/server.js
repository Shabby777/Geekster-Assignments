const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config({ path: './config/env' });

// Connect to database
connectDB();

// Initialize app
const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());

// Route files
const authRoutes = require('./routes/authRoutes');

// Mount routers
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
