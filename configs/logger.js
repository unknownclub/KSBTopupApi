const winston = require('winston');

const alignedWithColorsAndTime = winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp(),
    winston.format.align(),
    winston.format.printf((info) => {
      const {
        timestamp, level, message, ...args
      } = info;

      const ts = timestamp.slice(0, 19).replace('T', ' ');
      return `${ts} [${level}]: ${message} ${Object.keys(args).length ? JSON.stringify(args, null, 2) : ''}`;
    }),
  );

const logger = winston.createLogger({
    format: alignedWithColorsAndTime,
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({filename: 'logs/error/error.log', level: 'error'}),
        new winston.transports.File({filename: 'logs/activity/activity.log', level:'info'})
    ]
});

module.exports = logger;