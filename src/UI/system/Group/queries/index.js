import GetList from './getList';
import GetOne from './getOne';
import Create from './create';
import Update from './update';
import Delete from './delete';
import GetMany from './getMany';
import GetManyReference from './getManyReference';
import { data } from 'oda-aor-rest';

import {
  getListOfGroup,
  getOneOfGroup,
  getManyOfGroup,
  deleteOfGroup,
  createOfGroup,
  updateOfGroup,
  getManyReferenceOfGroup,
  getListOfGroupResult,
  getOneOfGroupResult,
  getManyOfGroupResult,
  deleteOfGroupResult,
  createOfGroupResult,
  updateOfGroupResult,
  getManyReferenceOfGroupResult,
} from './queries';


export default class extends data.resource.Resource {
  constructor (options, resourceContainer) {
    super(options, resourceContainer);
    this._name = 'Group';
    this._fields = {
      id: { type: 'string'},
      name: { type: 'string'},
      students: {
        ref:{
          ref: 'Student',
          type:  data.resource.interfaces.refType.HasMany,
        },
      },
      curator: {
        ref:{
          ref: 'Curator',
          type:  data.resource.interfaces.refType.BelongsTo,
        },
      },
    };
    this._query = {
      GET_LIST: new GetList({
        query: getListOfGroup,
        resultQuery: getListOfGroupResult,
      }, this),
      GET_ONE: new GetOne({
        query: getOneOfGroup,
        resultQuery: getOneOfGroupResult,
      }, this),
      GET_MANY: new GetMany({
        query: getManyOfGroup,
        resultQuery: getManyOfGroupResult,
      }, this),
      GET_MANY_REFERENCE: new GetManyReference({
        query: getManyReferenceOfGroup,
        resultQuery: getManyReferenceOfGroupResult,
      }, this),
      CREATE: new Create({
        query: createOfGroup,
        resultQuery: createOfGroupResult,
      }, this),
      UPDATE: new Update({
        query: updateOfGroup,
        resultQuery: updateOfGroupResult,
      }, this),
      DELETE: new Delete({
        query: deleteOfGroup,
        resultQuery: deleteOfGroupResult,
      }, this),
    };
  }
};
