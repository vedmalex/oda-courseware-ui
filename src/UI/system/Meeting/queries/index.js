import { data } from 'oda-aor-rest';
import { fragments, queries } from './queries';
import set from 'lodash/set';

export default {
  queries,
  fragments,
  name: 'system/Meeting',
  role: 'system',
  fields: {
    id: { type: 'string' },
    date: { type: 'date' },
    curator: {
      ref: {
        resource: 'system/Curator',
        type: data.resource.interfaces.refType.BelongsTo,
      },
    },
    group: {
      ref: {
        resource: 'system/Group',
        type: data.resource.interfaces.refType.BelongsTo,
      },
    },
    students: {
      ref: {
        resource: 'system/Student',
        type: data.resource.interfaces.refType.BelongsToMany,
      },
    },
  },
  operations: {
    GET_LIST: {
      filterBy: (params) => Object.keys(params.filter).reduce((acc, key) => {
        if (key === 'ids') {
          return { ...acc, id: { in: params.filter[key] } };
        }
        if (key === 'q') {
          return { ...acc,
            or: [
              { date: { imatch: params.filter[key] } },
            ]
          };
        }
        return set(acc, key.replace('-', '.'), params.filter[key]);
      }, {}),
    },
    // GET_ONE: {},
    // GET_MANY: {},
    // GET_MANY_REFERENCE: {},
    // CREATE: {},
    // UPDATE: {},
    // DELETE: {},
  },
};

export const extension = [
    {
      name:'system/Student',
      fields:{
        present: { type: 'boolean' },
        specialNotes: { type: 'string' },
      }
    },
];
