import { reshape } from 'oda-lodash';
import { data as utils } from 'oda-aor-rest';

const { updateField, updateSingle, updateMany } = utils;

export default ({ queries, resources }) => ({
  query: queries.Teacher.UPDATE,
  parseResponse: (response) => {
    const data = reshape(queries.Teacher.UPDATE_RESULT, response.data);
    return { data: data.item };
  },
  refetchQueries: variables => ([{
    query: queries.Teacher.GET_ONE,
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
        ...updateField(data, previousData, 'firstName'),
        ...updateField(data, previousData, 'middleName'),
        ...updateField(data, previousData, 'lastName'),
        ...updateMany(data, previousData, 'subjects', 'Subject', res),
        ...updateSingle(data, previousData, 'user', 'User', res),
      },
    };
  },
});
