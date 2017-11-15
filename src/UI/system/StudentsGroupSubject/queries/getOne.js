import { reshape } from 'oda-lodash';

export default ({ queries, resources }) => ({
  query: queries.StudentsGroupSubject.GET_ONE,
  parseResponse: (response) => {
    const data = reshape(queries.StudentsGroupSubject.GET_ONE_RESULT, response.data);
    return {
      data: data.item,
    };
  },
  fetchPolicy: 'network-only',
  variables: params => ({
    id: params.id,
  }),
});
