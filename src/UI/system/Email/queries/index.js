import GetList from './getList';
import GetOne from './getOne';
import Create from './create';
import Update from './update';
import Delete from './delete';
import GetMany from './getMany';
import GetManyReference from './getManyReference';
import { data } from 'oda-aor-rest';

import {
  getListOfEmail,
  getOneOfEmail,
  getManyOfEmail,
  deleteOfEmail,
  createOfEmail,
  updateOfEmail,
  getManyReferenceOfEmail,
  getListOfEmailResult,
  getOneOfEmailResult,
  getManyOfEmailResult,
  deleteOfEmailResult,
  createOfEmailResult,
  updateOfEmailResult,
  getManyReferenceOfEmailResult,
} from './queries';


export default class extends data.resource.Resource {
  constructor (options, resourceContainer) {
    super(options, resourceContainer);
    this._name = 'Email';
    this._fields = {
      id: { type: 'string'},
      email: { type: 'string'},
      type: {
        ref:{
          ref: 'EmailType',
          type:  data.resource.interfaces.refType.BelongsTo,
        },
      },
      person: {
        ref:{
          ref: 'Person',
          type:  data.resource.interfaces.refType.BelongsTo,
        },
      },
    };
    this._query = {
      GET_LIST: new GetList({
        query: getListOfEmail,
        resultQuery: getListOfEmailResult,
      }, this),
      GET_ONE: new GetOne({
        query: getOneOfEmail,
        resultQuery: getOneOfEmailResult,
      }, this),
      GET_MANY: new GetMany({
        query: getManyOfEmail,
        resultQuery: getManyOfEmailResult,
      }, this),
      GET_MANY_REFERENCE: new GetManyReference({
        query: getManyReferenceOfEmail,
        resultQuery: getManyReferenceOfEmailResult,
      }, this),
      CREATE: new Create({
        query: createOfEmail,
        resultQuery: createOfEmailResult,
      }, this),
      UPDATE: new Update({
        query: updateOfEmail,
        resultQuery: updateOfEmailResult,
      }, this),
      DELETE: new Delete({
        query: deleteOfEmail,
        resultQuery: deleteOfEmailResult,
      }, this),
    };
  }
};
