const winston = require('winston');

const logger = winston.createLogger({
	level: 'info',
	format: winston.format.json(),
	transports: [
		/*
		 * 
		 * - Write all logs with level `error` and below to `error.log`
		 * - Write all logs in console`
		 * 
		 */
		new winston.transports.File({ filename: 'error.log', level: 'error' }),
		new winston.transports.Console(),
	],
});

module.exports = logger;