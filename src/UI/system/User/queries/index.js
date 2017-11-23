import GetList from './getList';
import GetOne from './getOne';
import Create from './create';
import Update from './update';
import Delete from './delete';
import GetMany from './getMany';
import GetManyReference from './getManyReference';
import { data } from 'oda-aor-rest';

import {
  getListOfUser,
  getOneOfUser,
  getManyOfUser,
  deleteOfUser,
  createOfUser,
  updateOfUser,
  getManyReferenceOfUser,
  getListOfUserResult,
  getOneOfUserResult,
  getManyOfUserResult,
  deleteOfUserResult,
  createOfUserResult,
  updateOfUserResult,
  getManyReferenceOfUserResult,
} from './queries';


export default class extends data.resource.Resource {
  constructor (options, resourceContainer) {
    super(options, resourceContainer);
    this._name = 'User';
    this._fields = {
      id: { type: 'string'},
      userName: { type: 'string'},
      password: { type: 'string'},
      isAdmin: { type: 'boolean'},
      isSystem: { type: 'boolean'},
      enabled: { type: 'boolean'},
    };
    this._query = {
      GET_LIST: new GetList({
        query: getListOfUser,
        resultQuery: getListOfUserResult,
      }, this),
      GET_ONE: new GetOne({
        query: getOneOfUser,
        resultQuery: getOneOfUserResult,
      }, this),
      GET_MANY: new GetMany({
        query: getManyOfUser,
        resultQuery: getManyOfUserResult,
      }, this),
      GET_MANY_REFERENCE: new GetManyReference({
        query: getManyReferenceOfUser,
        resultQuery: getManyReferenceOfUserResult,
      }, this),
      CREATE: new Create({
        query: createOfUser,
        resultQuery: createOfUserResult,
      }, this),
      UPDATE: new Update({
        query: updateOfUser,
        resultQuery: updateOfUserResult,
      }, this),
      DELETE: new Delete({
        query: deleteOfUser,
        resultQuery: deleteOfUserResult,
      }, this),
    };
  }
};
