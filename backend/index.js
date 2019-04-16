require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const userRoutes = require('./routes').userRoutes

const app = express();

app.use(express.json(), cors(), helmet());

app.use('/api', userRoutes)

const port = process.env.PORT || 5000

app.listen(port)