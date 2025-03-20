const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

// Custom format for log messages
const customFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label || 'APP'}] ${level}: ${message}`;
});

// Creating the logger instance
const logger = createLogger({
    format: combine(
        label({ label: 'Airline-API' }), // Optional label for log identification
        timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), // Timestamp format
        customFormat
    ),
    transports: [
        new transports.Console(), // Logs to console
        new transports.File({ filename: 'combined.log' }) // Logs to a file
    ]
});

module.exports = logger;
