import { createLogger, transports, format } from 'winston';
import moment from 'moment';

const timestamp = () => moment().format('YYYY-MM-DD HH:mm:ss.SSSS');

const customFormat = format.printf(options =>
  `${timestamp()} ${options.level.toUpperCase()} ${(options.message ? options.message : '')}
  ${(options.meta && Object.keys(options.meta).length
    ? '\n\t' + JSON.stringify(options.meta) // tslint:disable-line:prefer-template
    : '')}`);

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: customFormat,
  transports: [
    new (transports.Console)(),
  ],
});

export default logger;
