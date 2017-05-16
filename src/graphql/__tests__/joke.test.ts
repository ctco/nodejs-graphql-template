import { graphql } from 'graphql';
import schema from '../schema';
import * as nock from 'nock';

const rootValue = {};
const context = {};

beforeAll(() => {
  const response = {
    type: 'success',
    value: {
      id: 1000,
      joke: "Mock Chuck Norris's database has only one table, 'Kick', which he DROPs frequently.",
      categories: [
        'nerdy'
      ]
    }
  };

  // mock service endpoint
  nock(process.env.JOKE_SERVICE_URI)
    .get('/jokes/random')
    .query({ limitTo: '[nerdy]' })
    .reply(200, response);
});

describe('query.joke', () => {
  it('should match snapshot', async () => {
    const query = `
      query Q {
        joke {
          text
          category
        }
      }
    `;

    const result = await graphql(schema, query, rootValue, context);
    const { data } = result;

    expect(data).toMatchSnapshot();
  });
});

