const express = require('express');
const logger = require('.//logger');

const app = express();

// Using the logging middleware
app.use(logger);

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});