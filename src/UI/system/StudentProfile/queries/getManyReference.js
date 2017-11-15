import { reshape } from 'oda-lodash';
import { constants } from 'oda-aor-rest';

const useOpposite = {
};

  const { SortOrder } = constants;

export default ({ queries, resources }) => ({
  query: params => queries.StudentProfile.GET_MANY_REFERENCE[params.target],
  parseResponse: (response, params) => {
    const data = reshape(queries.StudentProfile.GET_MANY_REFERENCE_RESULT[params.target], response.data);
    return {
      data: data.items.data,
      total: data.items.total,
    };
  },
  fetchPolicy: 'network-only',
  variables: (params) => {
    const filter = {};

    if (!useOpposite[params.target]) {
      filter[params.target] = { eq: params.id };
    }

    return {
      id: params.id,
      target: params.target,
      skip: (params.pagination.page - 1) * params.pagination.perPage,
      limit: params.pagination.perPage,
      orderBy: params.sort.field !== 'id' ? `${params.sort.field}${SortOrder[params.sort.order]}` : undefined,
      filter,
    };
  },
});
