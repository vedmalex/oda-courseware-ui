import { reshape } from 'oda-lodash';
import { data as utils } from 'oda-aor-rest';

const { createField, createSingle, createMany } = utils;

export default ({ queries, resources }) => ({
  query: queries.User.CREATE,
  parseResponse: (response) => {
    const data = reshape(queries.User.CREATE_RESULT, response.data);
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
        ...createField(data, 'userName'),
        ...createField(data, 'password'),
        ...createField(data, 'isAdmin'),
        ...createField(data, 'isSystem'),
        ...createField(data, 'enabled'),
        ...createMany(data, 'asTeacher', 'Teacher', res),
        ...createMany(data, 'asStudent', 'Student', res),
      },
    };
  },
});
