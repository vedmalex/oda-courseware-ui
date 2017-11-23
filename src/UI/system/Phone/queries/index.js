import GetList from './getList';
import GetOne from './getOne';
import Create from './create';
import Update from './update';
import Delete from './delete';
import GetMany from './getMany';
import GetManyReference from './getManyReference';
import { data } from 'oda-aor-rest';

import {
  getListOfPhone,
  getOneOfPhone,
  getManyOfPhone,
  deleteOfPhone,
  createOfPhone,
  updateOfPhone,
  getManyReferenceOfPhone,
  getListOfPhoneResult,
  getOneOfPhoneResult,
  getManyOfPhoneResult,
  deleteOfPhoneResult,
  createOfPhoneResult,
  updateOfPhoneResult,
  getManyReferenceOfPhoneResult,
} from './queries';


export default class extends data.resource.Resource {
  constructor (options, resourceContainer) {
    super(options, resourceContainer);
    this._name = 'Phone';
    this._fields = {
      id: { type: 'string'},
      phoneNumber: { type: 'string'},
      type: {
        ref:{
          ref: 'PhoneType',
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
        query: getListOfPhone,
        resultQuery: getListOfPhoneResult,
      }, this),
      GET_ONE: new GetOne({
        query: getOneOfPhone,
        resultQuery: getOneOfPhoneResult,
      }, this),
      GET_MANY: new GetMany({
        query: getManyOfPhone,
        resultQuery: getManyOfPhoneResult,
      }, this),
      GET_MANY_REFERENCE: new GetManyReference({
        query: getManyReferenceOfPhone,
        resultQuery: getManyReferenceOfPhoneResult,
      }, this),
      CREATE: new Create({
        query: createOfPhone,
        resultQuery: createOfPhoneResult,
      }, this),
      UPDATE: new Update({
        query: updateOfPhone,
        resultQuery: updateOfPhoneResult,
      }, this),
      DELETE: new Delete({
        query: deleteOfPhone,
        resultQuery: deleteOfPhoneResult,
      }, this),
    };
  }
};
