import GetList from './getList';
import GetOne from './getOne';
import Create from './create';
import Update from './update';
import Delete from './delete';
import GetMany from './getMany';
import GetManyReference from './getManyReference';
import { data } from 'oda-aor-rest';

import {
  getListOfPhoneType,
  getOneOfPhoneType,
  getManyOfPhoneType,
  deleteOfPhoneType,
  createOfPhoneType,
  updateOfPhoneType,
  getManyReferenceOfPhoneType,
  getListOfPhoneTypeResult,
  getOneOfPhoneTypeResult,
  getManyOfPhoneTypeResult,
  deleteOfPhoneTypeResult,
  createOfPhoneTypeResult,
  updateOfPhoneTypeResult,
  getManyReferenceOfPhoneTypeResult,
} from './queries';


export default class extends data.resource.Resource {
  constructor (options, resourceContainer) {
    super(options, resourceContainer);
    this._name = 'PhoneType';
    this._fields = {
      id: { type: 'string'},
      name: { type: 'string'},
    };
    this._query = {
      GET_LIST: new GetList({
        query: getListOfPhoneType,
        resultQuery: getListOfPhoneTypeResult,
      }, this),
      GET_ONE: new GetOne({
        query: getOneOfPhoneType,
        resultQuery: getOneOfPhoneTypeResult,
      }, this),
      GET_MANY: new GetMany({
        query: getManyOfPhoneType,
        resultQuery: getManyOfPhoneTypeResult,
      }, this),
      GET_MANY_REFERENCE: new GetManyReference({
        query: getManyReferenceOfPhoneType,
        resultQuery: getManyReferenceOfPhoneTypeResult,
      }, this),
      CREATE: new Create({
        query: createOfPhoneType,
        resultQuery: createOfPhoneTypeResult,
      }, this),
      UPDATE: new Update({
        query: updateOfPhoneType,
        resultQuery: updateOfPhoneTypeResult,
      }, this),
      DELETE: new Delete({
        query: deleteOfPhoneType,
        resultQuery: deleteOfPhoneTypeResult,
      }, this),
    };
  }
};
