import './env-test';
import { promisifyAll } from 'bluebird';
import { Client }  from 'flashheart';

promisifyAll(Client.prototype);
