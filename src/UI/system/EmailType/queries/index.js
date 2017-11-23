import GetList from './getList';
import GetOne from './getOne';
import Create from './create';
import Update from './update';
import Delete from './delete';
import GetMany from './getMany';
import GetManyReference from './getManyReference';
import { data } from 'oda-aor-rest';

import {
  getListOfEmailType,
  getOneOfEmailType,
  getManyOfEmailType,
  deleteOfEmailType,
  createOfEmailType,
  updateOfEmailType,
  getManyReferenceOfEmailType,
  getListOfEmailTypeResult,
  getOneOfEmailTypeResult,
  getManyOfEmailTypeResult,
  deleteOfEmailTypeResult,
  createOfEmailTypeResult,
  updateOfEmailTypeResult,
  getManyReferenceOfEmailTypeResult,
} from './queries';


export default class extends data.resource.Resource {
  constructor (options, resourceContainer) {
    super(options, resourceContainer);
    this._name = 'EmailType';
    this._fields = {
      id: { type: 'string'},
      name: { type: 'string'},
    };
    this._query = {
      GET_LIST: new GetList({
        query: getListOfEmailType,
        resultQuery: getListOfEmailTypeResult,
      }, this),
      GET_ONE: new GetOne({
        query: getOneOfEmailType,
        resultQuery: getOneOfEmailTypeResult,
      }, this),
      GET_MANY: new GetMany({
        query: getManyOfEmailType,
        resultQuery: getManyOfEmailTypeResult,
      }, this),
      GET_MANY_REFERENCE: new GetManyReference({
        query: getManyReferenceOfEmailType,
        resultQuery: getManyReferenceOfEmailTypeResult,
      }, this),
      CREATE: new Create({
        query: createOfEmailType,
        resultQuery: createOfEmailTypeResult,
      }, this),
      UPDATE: new Update({
        query: updateOfEmailType,
        resultQuery: updateOfEmailTypeResult,
      }, this),
      DELETE: new Delete({
        query: deleteOfEmailType,
        resultQuery: deleteOfEmailTypeResult,
      }, this),
    };
  }
};
