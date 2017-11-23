import GetList from './getList';
import GetOne from './getOne';
import Create from './create';
import Update from './update';
import Delete from './delete';
import GetMany from './getMany';
import GetManyReference from './getManyReference';
import { data } from 'oda-aor-rest';

import {
  getListOfSocialNetwork,
  getOneOfSocialNetwork,
  getManyOfSocialNetwork,
  deleteOfSocialNetwork,
  createOfSocialNetwork,
  updateOfSocialNetwork,
  getManyReferenceOfSocialNetwork,
  getListOfSocialNetworkResult,
  getOneOfSocialNetworkResult,
  getManyOfSocialNetworkResult,
  deleteOfSocialNetworkResult,
  createOfSocialNetworkResult,
  updateOfSocialNetworkResult,
  getManyReferenceOfSocialNetworkResult,
} from './queries';


export default class extends data.resource.Resource {
  constructor (options, resourceContainer) {
    super(options, resourceContainer);
    this._name = 'SocialNetwork';
    this._fields = {
      id: { type: 'string'},
      account: { type: 'string'},
      url: { type: 'string'},
      type: {
        ref:{
          ref: 'SocialNetworkType',
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
        query: getListOfSocialNetwork,
        resultQuery: getListOfSocialNetworkResult,
      }, this),
      GET_ONE: new GetOne({
        query: getOneOfSocialNetwork,
        resultQuery: getOneOfSocialNetworkResult,
      }, this),
      GET_MANY: new GetMany({
        query: getManyOfSocialNetwork,
        resultQuery: getManyOfSocialNetworkResult,
      }, this),
      GET_MANY_REFERENCE: new GetManyReference({
        query: getManyReferenceOfSocialNetwork,
        resultQuery: getManyReferenceOfSocialNetworkResult,
      }, this),
      CREATE: new Create({
        query: createOfSocialNetwork,
        resultQuery: createOfSocialNetworkResult,
      }, this),
      UPDATE: new Update({
        query: updateOfSocialNetwork,
        resultQuery: updateOfSocialNetworkResult,
      }, this),
      DELETE: new Delete({
        query: deleteOfSocialNetwork,
        resultQuery: deleteOfSocialNetworkResult,
      }, this),
    };
  }
};
