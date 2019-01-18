import { graphql } from 'graphql';
import schema from '../schema';
import nock from 'nock';

const rootValue = {};
const context = {};

beforeAll(() => {

  // mock service endpoint

  const filmsResponse = {
    count: 2,
    next: null,
    previous: null,
    results: [
      {
        title: 'A New Hope',
        episode_id: 4,
        url: 'https://swapi.co/api/films/',
      },
      {
        title: 'Attack of the Clones',
        episode_id: 2,
        url: 'https://swapi.co/api/films/',
      },
    ],
  };

  nock(process.env.SWAPI_SERVICE_URL!)
    .get('/films/')
    .reply(200, filmsResponse);

  const filmResponse = {
    title: 'The Empire Strikes Back',
    episode_id: 5,
    url: 'https://swapi.co/api/films/2/',
  };

  nock(process.env.SWAPI_SERVICE_URL!)
    .get('/films/2/')
    .reply(200, filmResponse);
});

describe('query.swapi', () => {
  it('should match snapshot with pagination', async () => {
    const query = `
      query Q {
        allFilms {
          edges {
            node {
              title
              episodeID
            }
            cursor
          }
          pageInfo {
            startCursor
            endCursor
            hasNextPage
            hasPreviousPage
          }
          totalCount
          films {
            title
            episodeID
          }
        }
      }
    `;

    const result = await graphql(schema, query, rootValue, context);
    const { data, errors } = result;

    expect({ data, errors }).toMatchSnapshot();
  });

  it('should match snapshot without pagination', async () => {
    const query = `
      query Q {
        film(filmID: 2) {
          title
          episodeID
        }
      }
    `;

    const result = await graphql(schema, query, rootValue, context);
    const { data, errors } = result;

    expect({ data, errors }).toMatchSnapshot();
  });
});
