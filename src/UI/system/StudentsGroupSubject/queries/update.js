import { reshape } from 'oda-lodash';
import { data as utils } from 'oda-aor-rest';

const { updateField, updateSingle, updateMany } = utils;

export default ({ queries, resources }) => ({
  query: queries.StudentsGroupSubject.UPDATE,
  parseResponse: (response) => {
    const data = reshape(queries.StudentsGroupSubject.UPDATE_RESULT, response.data);
    return { data: data.item };
  },
  refetchQueries: variables => ([{
    query: queries.StudentsGroupSubject.GET_ONE,
    variables: {
      id: variables.input.id,
    },
  }]),
  variables: (params) => {
    const { data, previousData } = params;
    const res = resources({ queries });
    return {
      input: {
        id: data.id,
        ...updateField(data, previousData, 'subject'),
        ...updateField(data, previousData, 'studentsGroup'),
      },
    };
  },
});
