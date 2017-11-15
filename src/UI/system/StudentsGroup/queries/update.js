import { reshape } from 'oda-lodash';
import { data as utils } from 'oda-aor-rest';

const { updateField, updateSingle, updateMany } = utils;

export default ({ queries, resources }) => ({
  query: queries.StudentsGroup.UPDATE,
  parseResponse: (response) => {
    const data = reshape(queries.StudentsGroup.UPDATE_RESULT, response.data);
    return { data: data.item };
  },
  refetchQueries: variables => ([{
    query: queries.StudentsGroup.GET_ONE,
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
        ...updateField(data, previousData, 'name'),
        ...updateMany(data, previousData, 'subjects', 'Subject', res),
        ...updateMany(data, previousData, 'students', 'Student', res),
      },
    };
  },
});
