import GetList from './getList';
import GetOne from './getOne';
import Create from './create';
import Update from './update';
import Delete from './delete';
import GetMany from './getMany';
import GetManyReference from './getManyReference';
import { data } from 'oda-aor-rest';

import {
  getListOfCurator,
  getOneOfCurator,
  getManyOfCurator,
  deleteOfCurator,
  createOfCurator,
  updateOfCurator,
  getManyReferenceOfCurator,
  getListOfCuratorResult,
  getOneOfCuratorResult,
  getManyOfCuratorResult,
  deleteOfCuratorResult,
  createOfCuratorResult,
  updateOfCuratorResult,
  getManyReferenceOfCuratorResult,
} from './queries';


export default class extends data.resource.Resource {
  constructor (options, resourceContainer) {
    super(options, resourceContainer);
    this._name = 'Curator';
    this._fields = {
      id: { type: 'string'},
      person: {
        ref:{
          ref: 'Person',
          type:  data.resource.interfaces.refType.BelongsTo,
        },
      },
      groups: {
        ref:{
          ref: 'Group',
          type:  data.resource.interfaces.refType.HasMany,
        },
      },
    };
    this._query = {
      GET_LIST: new GetList({
        query: getListOfCurator,
        resultQuery: getListOfCuratorResult,
      }, this),
      GET_ONE: new GetOne({
        query: getOneOfCurator,
        resultQuery: getOneOfCuratorResult,
      }, this),
      GET_MANY: new GetMany({
        query: getManyOfCurator,
        resultQuery: getManyOfCuratorResult,
      }, this),
      GET_MANY_REFERENCE: new GetManyReference({
        query: getManyReferenceOfCurator,
        resultQuery: getManyReferenceOfCuratorResult,
      }, this),
      CREATE: new Create({
        query: createOfCurator,
        resultQuery: createOfCuratorResult,
      }, this),
      UPDATE: new Update({
        query: updateOfCurator,
        resultQuery: updateOfCuratorResult,
      }, this),
      DELETE: new Delete({
        query: deleteOfCurator,
        resultQuery: deleteOfCuratorResult,
      }, this),
    };
  }
};
