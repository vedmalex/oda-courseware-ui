import { reshape } from 'oda-lodash';
import { data as utils } from 'oda-aor-rest';

const { updateField, updateSingle, updateMany } = utils;

export default ({ queries, resources }) => ({
  query: queries.Student.UPDATE,
  parseResponse: (response) => {
    const data = reshape(queries.Student.UPDATE_RESULT, response.data);
    return { data: data.item };
  },
  refetchQueries: variables => ([{
    query: queries.Student.GET_ONE,
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
        ...updateField(data, previousData, 'uin'),
        ...updateField(data, previousData, 'dateOfBirth'),
        ...updateSingle(data, previousData, 'profile', 'StudentProfile', res),
        ...updateSingle(data, previousData, 'group', 'StudentsGroup', res),
        ...updateMany(data, previousData, 'followings', 'Student', res),
        ...updateMany(data, previousData, 'followers', 'Student', res),
      },
    };
  },
});
