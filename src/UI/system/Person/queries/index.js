import { data } from 'oda-aor-rest';
import { fragments, queries } from './queries';
import set from 'lodash/set';

export default {
  queries,
  fragments,
  name: 'system/Person',
  role: 'system',
  fields: {
    id: { type: 'string' },
    spiritualName: { type: 'string' },
    fullName: { type: 'string' },
    dateOfBirth: { type: 'date' },
    ages: { type: 'number' },
    specialNotes: { type: 'string' },
    user: {
      ref: {
        resource: 'system/User',
        type: data.resource.interfaces.refType.BelongsTo,
      },
    },
    socialNetworks: {
      ref: {
        resource: 'system/SocialNetwork',
        type: data.resource.interfaces.refType.HasMany,
      },
    },
    phones: {
      ref: {
        resource: 'system/Phone',
        type: data.resource.interfaces.refType.HasMany,
      },
    },
    emails: {
      ref: {
        resource: 'system/Email',
        type: data.resource.interfaces.refType.HasMany,
      },
    },
    asStudents: {
      ref: {
        resource: 'system/Student',
        type: data.resource.interfaces.refType.HasMany,
      },
    },
    asCurator: {
      ref: {
        resource: 'system/Curator',
        type: data.resource.interfaces.refType.HasOne,
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
              { fullName: { imatch: params.filter[key] } },

              { spiritualName: { imatch: params.filter[key] } },
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
];
