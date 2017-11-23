import GetList from './getList';
import GetOne from './getOne';
import Create from './create';
import Update from './update';
import Delete from './delete';
import GetMany from './getMany';
import GetManyReference from './getManyReference';
import { data } from 'oda-aor-rest';

import {
  getListOfSocialNetworkType,
  getOneOfSocialNetworkType,
  getManyOfSocialNetworkType,
  deleteOfSocialNetworkType,
  createOfSocialNetworkType,
  updateOfSocialNetworkType,
  getManyReferenceOfSocialNetworkType,
  getListOfSocialNetworkTypeResult,
  getOneOfSocialNetworkTypeResult,
  getManyOfSocialNetworkTypeResult,
  deleteOfSocialNetworkTypeResult,
  createOfSocialNetworkTypeResult,
  updateOfSocialNetworkTypeResult,
  getManyReferenceOfSocialNetworkTypeResult,
} from './queries';


export default class extends data.resource.Resource {
  constructor (options, resourceContainer) {
    super(options, resourceContainer);
    this._name = 'SocialNetworkType';
    this._fields = {
      id: { type: 'string'},
      name: { type: 'string'},
    };
    this._query = {
      GET_LIST: new GetList({
        query: getListOfSocialNetworkType,
        resultQuery: getListOfSocialNetworkTypeResult,
      }, this),
      GET_ONE: new GetOne({
        query: getOneOfSocialNetworkType,
        resultQuery: getOneOfSocialNetworkTypeResult,
      }, this),
      GET_MANY: new GetMany({
        query: getManyOfSocialNetworkType,
        resultQuery: getManyOfSocialNetworkTypeResult,
      }, this),
      GET_MANY_REFERENCE: new GetManyReference({
        query: getManyReferenceOfSocialNetworkType,
        resultQuery: getManyReferenceOfSocialNetworkTypeResult,
      }, this),
      CREATE: new Create({
        query: createOfSocialNetworkType,
        resultQuery: createOfSocialNetworkTypeResult,
      }, this),
      UPDATE: new Update({
        query: updateOfSocialNetworkType,
        resultQuery: updateOfSocialNetworkTypeResult,
      }, this),
      DELETE: new Delete({
        query: deleteOfSocialNetworkType,
        resultQuery: deleteOfSocialNetworkTypeResult,
      }, this),
    };
  }
};
