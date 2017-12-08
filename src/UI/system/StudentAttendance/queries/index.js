import { data } from 'oda-aor-rest';
import { fragments, queries } from './queries';
import set from 'lodash/set';

export default {
  queries,
  fragments,
  name: 'StudentAttendance',
  fields: {
    id: { type: 'string' },
    meeting: { type: 'string' },
    present: { type: 'boolean' },
    specialNotes: { type: 'string' },
    student: { type: 'string' },
    meetingLink: {
      ref: {
        resource: 'Meeting',
        type: data.resource.interfaces.refType.BelongsTo,
      },
    },
    studentLink: {
      ref: {
        resource: 'Student',
        type: data.resource.interfaces.refType.BelongsTo,
      },
    },
  },
  operations: {
    GET_LIST: {
      _filterBy: (params) => Object.keys(params.filter).reduce((acc, key) => {
        if (key === 'ids') {
          return { ...acc, id: { in: params.filter[key] } };
        }
        if (key === 'q') {
          return { ...acc, id: { imatch: params.filter[key] } };
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
