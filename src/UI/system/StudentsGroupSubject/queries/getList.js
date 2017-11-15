import { reshape } from 'oda-lodash';
import { constants } from 'oda-aor-rest';
import set from 'lodash/set';

const { SortOrder } = constants;

export default ({ queries, resources }) => ({
  query: queries.StudentsGroupSubject.GET_LIST,
  parseResponse: (response) => {
    const data = reshape(queries.StudentsGroupSubject.GET_LIST_RESULT, response.data);
    return {
      data: data.items.data,
      total: data.items.total,
    };
  },
  fetchPolicy: 'network-only',
  variables: (params) => {
    const filter = Object.keys(params.filter).reduce((acc, key) => {
      if (key === 'ids') {
        return { ...acc, id: { in: params.filter[key] } };
      }
      if (key === 'q') {
        return { ...acc, id: { imatch: params.filter[key] } };
      }
      return set(acc, key.replace('-', '.'), params.filter[key]);
    }, {});
    return {
      skip: (params.pagination.page - 1) * params.pagination.perPage,
      limit: params.pagination.perPage,
      orderBy: params.sort.field !== 'id' ? `${params.sort.field}${SortOrder[params.sort.order]}` : undefined,
      filter,
    };
  },
});
