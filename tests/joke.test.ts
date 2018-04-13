import client, { gql } from './client';

test('jokes.byCategory should return a random joke', async () => {
  const response = await client().query({
    query: gql`
      query Query {
        jokes {
          byCategory {
            id
            text
            categories
          }
        }
      }
    `,
  });

  const byCategory = (response.data as any).jokes.byCategory;
  expect(byCategory).toMatchObject({
    id: expect.any(String),
    text: expect.any(String),
    categories: expect.any(Array),
  });
});
