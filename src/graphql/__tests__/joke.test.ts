import { graphql } from 'graphql';
import schema from '../schema';
import * as nock from 'nock';

const rootValue = {};
const context = {};

beforeAll(() => {

  // mock service endpoint

  const defaultResponse = {
    type: 'success',
    value: {
      id: 2000,
      joke: "When God said, &quot;let there be light&quot;, Chuck Norris said, &quot;say 'please'.&quot;",
      categories: []
    }
  };
  nock(process.env.JOKE_SERVICE_URI)
    .get('/jokes/random')
    .reply(200, defaultResponse);

  const nerdyResponse = {
    type: 'success',
    value: {
      id: 1000,
      joke: "Mock Chuck Norris's database has only one table, 'Kick', which he DROPs frequently.",
      categories: [
        'nerdy'
      ]
    }
  };
  nock(process.env.JOKE_SERVICE_URI)
    .get('/jokes/random')
    .query({limitTo: '[nerdy]'})
    .reply(200, nerdyResponse);
});

describe('query.joke', () => {
  it('should match default snapshot', async () => {
    const query = `
      query Q {
        jokeByCategory {
          id
          text
          categories
        }
      }
    `;

    const result = await graphql(schema, query, rootValue, context);
    const {data} = result;

    expect(data).toMatchSnapshot();
  });

  it('should match nerdy snapshot', async () => {
    const query = `
      query Q {
        jokeByCategory(category: NERDY) {
          id
          text
          categories
        }
      }
    `;

    const result = await graphql(schema, query, rootValue, context);
    const {data} = result;

    expect(data).toMatchSnapshot();
  });
});

