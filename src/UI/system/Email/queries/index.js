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
    this._name = 'Email';
    this._fields = {
      id: { type: 'string' },
      email: { type: 'string' },
      type: {
        ref: {
          resource: 'EmailType',
          type: data.resource.interfaces.refType.BelongsTo,
        },
      },
      person: {
        ref: {
          resource: 'Person',
          type: data.resource.interfaces.refType.BelongsTo,
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
