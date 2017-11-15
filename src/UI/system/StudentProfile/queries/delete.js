import { reshape } from 'oda-lodash';

export default ({ queries, resources }) => ({
  query: queries.StudentProfile.DELETE,
  parseResponse: (response) => {
    const data = reshape(queries.StudentProfile.DELETE_RESULT, response.data);
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
