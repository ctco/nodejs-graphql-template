import * as winston from 'winston';
import * as moment from 'moment';

const logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({
      timestamp: () => moment().format('YYYY-MM-DD HH:mm:ss.SSSS'),
      formatter: options =>
               options.timestamp() + ' ' +
               options.level.toUpperCase() + ' ' +
              (options.message ? options.message : '') +
              (options.meta && Object.keys(options.meta).length ? '\n\t' + JSON.stringify(options.meta) : '' )
    })
  ]
});

logger.level = process.env.LOG_LEVEL || 'info';

export default logger;
