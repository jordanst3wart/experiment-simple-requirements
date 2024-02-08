import winston from 'winston';

// Define the logger configuration
const logger = winston.createLogger({
    level: 'info', // Set log level (options: error, warn, info, verbose, debug, silly)
    format: winston.format.combine(
        winston.format.timestamp(), // Add timestamp to logs
        winston.format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
    ),
    transports: [
        // Console transport (outputs to console)
        new winston.transports.Console(),

        // You can add more transports like file or database if needed
        // Example file transport:
        // new winston.transports.File({ filename: 'logfile.log' }),
    ],
});

export default logger;