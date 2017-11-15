import { reshape } from 'oda-lodash';

export default ({ queries, resources }) => ({
  query: queries.Subject.DELETE,
  parseResponse: (response) => {
    const data = reshape(queries.Subject.DELETE_RESULT, response.data);
    return { data: data.item };
  },
  update: (store, response) => {
    // remove from cache
  },
  variables: params => ({
    input: {
      id: params.id,
    },
  }),
});
