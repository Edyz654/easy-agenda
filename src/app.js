const express = require('express');

const cors = require('cors');

const helmet = require('helmet');

const userRoutes = require('./routes/userRoutes');

const calendarRoutes = require('./routes/calendarRoutes');

const commitmentRoutes = require('./routes/commitmentRoutes');

const guests_commitmentRoutes = require('./routes/guests_commitmentRoutes');

const notificationRoutes = require('./routes/notificationRoutes');

const errorMiddleware = require('./middlewares/errorMiddleware');

const app = express();

app.use(cors());

app.use(helmet());

app.use(express.json());

app.use('/users', userRoutes);

app.use('/calendars', calendarRoutes);

app.use('/commitments', commitmentRoutes);

app.use('/guests_commitments', guests_commitmentRoutes);

app.use('/notifications', notificationRoutes);

app.use(errorMiddleware);


module.exports = app;

