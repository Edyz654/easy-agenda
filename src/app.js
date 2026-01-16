const express = require('express');

const cors = require('cors');

const helmet = require('helmet');

const userRoutes = require('./routes/userRoutes');

const calendarRoutes = require('./routes/calendarRoutes');

const errorMiddleware = require('./middlewares/errorMiddleware');

const app = express();

app.use(cors());

app.use(helmet());

app.use(express.json());

app.use('/users', userRoutes);

app.use('/calendars', calendarRoutes);

app.use(errorMiddleware);


module.exports = app;

