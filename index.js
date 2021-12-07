const express = require("express");
const cors = require('cors');
const morgan = require('morgan')
const bodyParser = require('body-parser')
const logger = require('./utils/logger');
const AppError = require('./utils/error');
require('dotenv').config()



global.AppError = AppError;

//import

const routeManager = require('./routes')

//app
const app = express();


//middleware




app.use(cors())
app.use(express.json());
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);
app.use(express.urlencoded({ extended: true }));

//route
app.use('/', routeManager)

app.use((req, res, next) => {
	const err = new Error('Method not allowed');
	err.statusCode = 404;
	next(err);
});



app.use((err, req, res, next) => {
	logger.log({
		level: 'error',
		message: err,
	});
	err.statusCode = err.statusCode || 500;
	err.status = err.status || 'error';
	res.status(err.statusCode).json({
		status: err.status,
		statusCode: err.statusCode,
		message: err.message,
	});
});

const port = process.env.PORT || 8000

app.listen(port, () => {
    logger.log({
        level: 'info',
        message:`listening to port ${port}`
    })
})