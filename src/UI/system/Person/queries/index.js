import GetList from './getList';
import GetOne from './getOne';
import Create from './create';
import Update from './update';
import Delete from './delete';
import GetMany from './getMany';
import GetManyReference from './getManyReference';
import { data } from 'oda-aor-rest';

import {
  getListOfPerson,
  getOneOfPerson,
  getManyOfPerson,
  deleteOfPerson,
  createOfPerson,
  updateOfPerson,
  getManyReferenceOfPerson,
  getListOfPersonResult,
  getOneOfPersonResult,
  getManyOfPersonResult,
  deleteOfPersonResult,
  createOfPersonResult,
  updateOfPersonResult,
  getManyReferenceOfPersonResult,
} from './queries';


export default class extends data.resource.Resource {
  constructor (options, resourceContainer) {
    super(options, resourceContainer);
    this._name = 'Person';
    this._fields = {
      id: { type: 'string'},
      spiritualName: { type: 'string'},
      fullName: { type: 'string'},
      dateOfBirth: { type: 'date'},
      ages: { type: 'number'},
      specialNotes: { type: 'string'},
      user: {
        ref:{
          ref: 'User',
          type:  data.resource.interfaces.refType.BelongsTo,
        },
      },
      socialNetworks: {
        ref:{
          ref: 'SocialNetwork',
          type:  data.resource.interfaces.refType.HasMany,
        },
      },
      phones: {
        ref:{
          ref: 'Phone',
          type:  data.resource.interfaces.refType.HasMany,
        },
      },
      emails: {
        ref:{
          ref: 'Email',
          type:  data.resource.interfaces.refType.HasMany,
        },
      },
      asStudents: {
        ref:{
          ref: 'Student',
          type:  data.resource.interfaces.refType.HasMany,
        },
      },
      asCurator: {
        ref:{
          ref: 'Curator',
          type:  data.resource.interfaces.refType.HasOne,
        },
      },
    };
    this._query = {
      GET_LIST: new GetList({
        query: getListOfPerson,
        resultQuery: getListOfPersonResult,
      }, this),
      GET_ONE: new GetOne({
        query: getOneOfPerson,
        resultQuery: getOneOfPersonResult,
      }, this),
      GET_MANY: new GetMany({
        query: getManyOfPerson,
        resultQuery: getManyOfPersonResult,
      }, this),
      GET_MANY_REFERENCE: new GetManyReference({
        query: getManyReferenceOfPerson,
        resultQuery: getManyReferenceOfPersonResult,
      }, this),
      CREATE: new Create({
        query: createOfPerson,
        resultQuery: createOfPersonResult,
      }, this),
      UPDATE: new Update({
        query: updateOfPerson,
        resultQuery: updateOfPersonResult,
      }, this),
      DELETE: new Delete({
        query: deleteOfPerson,
        resultQuery: deleteOfPersonResult,
      }, this),
    };
  }
};
