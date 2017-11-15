import { reshape } from 'oda-lodash';
import { constants } from 'oda-aor-rest';

const { SortOrder } = constants;

export default ({ queries, resources }) => ({
  query: queries.StudentProfile.GET_MANY,
  parseResponse: (response) => {
    const data = reshape(queries.StudentProfile.GET_MANY_RESULT, response.data);
    return {
      data: data.items,
    };
  },
  fetchPolicy: 'network-only',
  variables: params => ({
    filter: {
      id: { in: params.ids },
    },
  }),
});
