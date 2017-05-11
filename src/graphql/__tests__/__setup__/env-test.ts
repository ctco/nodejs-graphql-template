// TODO Actually this script is run before each test. So http mock should be instantiated somewhere else,
// before the jest runs, I guess.


// read env to be accessible on every test
import env from '../../../../env';
process.env = env;

// import all web service mocks
// import '../../../services/__service_mocks';
