import GetList from './getList';
import GetOne from './getOne';
import Create from './create';
import Update from './update';
import Delete from './delete';
import GetMany from './getMany';
import GetManyReference from './getManyReference';
import { data } from 'oda-aor-rest';

import {
  getListOfStudent,
  getOneOfStudent,
  getManyOfStudent,
  deleteOfStudent,
  createOfStudent,
  updateOfStudent,
  getManyReferenceOfStudent,
  getListOfStudentResult,
  getOneOfStudentResult,
  getManyOfStudentResult,
  deleteOfStudentResult,
  createOfStudentResult,
  updateOfStudentResult,
  getManyReferenceOfStudentResult,
} from './queries';


export default class extends data.resource.Resource {
  constructor (options, resourceContainer) {
    super(options, resourceContainer);
    this._name = 'Student';
    this._fields = {
      id: { type: 'string'},
      person: {
        ref:{
          ref: 'Person',
          type:  data.resource.interfaces.refType.BelongsTo,
        },
      },
      group: {
        ref:{
          ref: 'Group',
          type:  data.resource.interfaces.refType.BelongsTo,
        },
      },
    };
    this._query = {
      GET_LIST: new GetList({
        query: getListOfStudent,
        resultQuery: getListOfStudentResult,
      }, this),
      GET_ONE: new GetOne({
        query: getOneOfStudent,
        resultQuery: getOneOfStudentResult,
      }, this),
      GET_MANY: new GetMany({
        query: getManyOfStudent,
        resultQuery: getManyOfStudentResult,
      }, this),
      GET_MANY_REFERENCE: new GetManyReference({
        query: getManyReferenceOfStudent,
        resultQuery: getManyReferenceOfStudentResult,
      }, this),
      CREATE: new Create({
        query: createOfStudent,
        resultQuery: createOfStudentResult,
      }, this),
      UPDATE: new Update({
        query: updateOfStudent,
        resultQuery: updateOfStudentResult,
      }, this),
      DELETE: new Delete({
        query: deleteOfStudent,
        resultQuery: deleteOfStudentResult,
      }, this),
    };
  }
};
