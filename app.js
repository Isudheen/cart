const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

const productRouter = require('./routes/productRoutes');
const AppError = require('../../Nomadic/utils/appError');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/product', productRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`), 404);
});

module.exports = app;
