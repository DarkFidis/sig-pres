const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

require('dotenv').config();

const middlewares = require('./middlewares');
const routes = require('./routes');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(express.json());
app.use(cors());

app.use('/api', routes);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
