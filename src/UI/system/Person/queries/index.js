import _getList from './getList';
import _getOne from './getOne';
import _getMany from './getMany';
import _getManyReference from './getManyReference';
import _create from './create';
import _update from './update';
import _delete from './delete';
import { data } from 'oda-aor-rest';
import { fragments, queries } from './queries';

const {
  GetList,
  GetOne,
  Create,
  Update,
  Delete,
  GetMany,
  GetManyReference,
} = data.resource.operations

export default class extends data.resource.Resource {
  constructor(...args) {
    super(...args);
    this._queries = queries;
    this._fragments = fragments;
    this._name = 'Person';
    this._fields = {
      id: { type: 'string' },
      spiritualName: { type: 'string' },
      fullName: { type: 'string' },
      dateOfBirth: { type: 'date' },
      ages: { type: 'number' },
      specialNotes: { type: 'string' },
      user: {
        ref: {
          resource: 'User',
          type: data.resource.interfaces.refType.BelongsTo,
        },
      },
      socialNetworks: {
        ref: {
          resource: 'SocialNetwork',
          type: data.resource.interfaces.refType.HasMany,
        },
      },
      phones: {
        ref: {
          resource: 'Phone',
          type: data.resource.interfaces.refType.HasMany,
        },
      },
      emails: {
        ref: {
          resource: 'Email',
          type: data.resource.interfaces.refType.HasMany,
        },
      },
      asStudents: {
        ref: {
          resource: 'Student',
          type: data.resource.interfaces.refType.HasMany,
        },
      },
      asCurator: {
        ref: {
          resource: 'Curator',
          type: data.resource.interfaces.refType.HasOne,
        },
      },
    };
    this._operations = {
      GET_LIST: new GetList({ overrides: _getList, resource: this }),
      GET_ONE: new GetOne({ overrides: _getOne, resource: this }),
      GET_MANY: new GetMany({ overrides: _getMany, resource: this }),
      GET_MANY_REFERENCE: new GetManyReference({ overrides: _getManyReference, resource: this }),
      CREATE: new Create({ overrides: _create, resource: this }),
      UPDATE: new Update({ overrides: _update, resource: this }),
      DELETE: new Delete({ overrides: _delete, resource: this }),
    };
  }
};
