import { reshape } from 'oda-lodash';
import { data as utils } from 'oda-aor-rest';

const { updateField, updateSingle, updateMany } = utils;

export default ({ queries, resources }) => ({
  query: queries.StudentProfile.UPDATE,
  parseResponse: (response) => {
    const data = reshape(queries.StudentProfile.UPDATE_RESULT, response.data);
    return { data: data.item };
  },
  refetchQueries: variables => ([{
    query: queries.StudentProfile.GET_ONE,
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
        ...updateField(data, previousData, 'maths'),
        ...updateField(data, previousData, 'physics'),
        ...updateField(data, previousData, 'language'),
        ...updateSingle(data, previousData, 'student', 'Student', res),
      },
    };
  },
});
