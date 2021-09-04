// Dependencies
// =============================================================
const PORT = process.env.PORT || 3001;
const express = require('express');
const app = express();
const apiRoute = require('./routes/apiRoute');
const htmlRoute = require('./routes/htmlRoute');

// Sets up the Express app to handle data parsing
// =============================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes used
// =============================================================

app.use('/api', apiRoute);
app.use('/', htmlRoute);
app.use(express.static('public'));



// Listener
// =============================================================

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});