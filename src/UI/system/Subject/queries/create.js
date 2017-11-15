import { reshape } from 'oda-lodash';
import { data as utils } from 'oda-aor-rest';

const { createField, createSingle, createMany } = utils;

export default ({ queries, resources }) => ({
  query: queries.Subject.CREATE,
  parseResponse: (response) => {
    const data = reshape(queries.Subject.CREATE_RESULT, response.data);
    return { data: data.item };
  },
  update: (store, response) => {
    // insert into cache
  },
  variables: (params) => {
    const data = params.data;
    const res = resources({ queries });
    return { input:
      {
        ...createField(data, 'id'),
        ...createField(data, 'name'),
        ...createMany(data, 'groups', 'StudentsGroup', res),
        ...createSingle(data, 'teacher', 'Teacher', res),
      },
    };
  },
});
