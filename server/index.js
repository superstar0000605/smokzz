const cors = require('cors');
// Load env vars
require('dotenv').config(); 

const express = require('express');
const db = require('./config/db');

const usersRouter = require('./routes/users');

const app = express();
// Allow CORS from frontend
app.use(cors());

// JSON middleware
app.use(express.json());

app.use('/users', usersRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));