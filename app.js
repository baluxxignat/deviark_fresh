const express = require('express');
const mongoose = require('mongoose');
const { config } = require('dotenv');
const { variables: { PORT, DATA_BASE_URL } } = require('./config');

require('dotenv').config();

// MAIN APP
const app = express();

// MongoDB CONNECTION
async function start() {
    try {
        await mongoose.connect(config.get(DATA_BASE_URL), {

        });
    } catch (e) {
        console.log('Server Error', e.message);
        process.exit(1);
    }
}
start();

app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`));
