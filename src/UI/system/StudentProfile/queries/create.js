import { reshape } from 'oda-lodash';
import { data as utils } from 'oda-aor-rest';

const { createField, createSingle, createMany } = utils;

export default ({ queries, resources }) => ({
  query: queries.StudentProfile.CREATE,
  parseResponse: (response) => {
    const data = reshape(queries.StudentProfile.CREATE_RESULT, response.data);
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
        ...createField(data, 'maths'),
        ...createField(data, 'physics'),
        ...createField(data, 'language'),
        ...createSingle(data, 'student', 'Student', res),
      },
    };
  },
});
