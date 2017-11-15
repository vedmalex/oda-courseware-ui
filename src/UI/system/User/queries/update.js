import { reshape } from 'oda-lodash';
import { data as utils } from 'oda-aor-rest';

const { updateField, updateSingle, updateMany } = utils;

export default ({ queries, resources }) => ({
  query: queries.User.UPDATE,
  parseResponse: (response) => {
    const data = reshape(queries.User.UPDATE_RESULT, response.data);
    return { data: data.item };
  },
  refetchQueries: variables => ([{
    query: queries.User.GET_ONE,
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
        ...updateField(data, previousData, 'userName'),
        ...updateField(data, previousData, 'password'),
        ...updateField(data, previousData, 'isAdmin'),
        ...updateField(data, previousData, 'isSystem'),
        ...updateField(data, previousData, 'enabled'),
      },
    };
  },
});
