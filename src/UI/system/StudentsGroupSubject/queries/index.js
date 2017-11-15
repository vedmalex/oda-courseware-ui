import GET_LIST from './getList';
import GET_ONE from './getOne';
import CREATE from './create';
import UPDATE from './update';
import DELETE from './delete';
import GET_MANY from './getMany';
import GET_MANY_REFERENCE from './getManyReference';
import {
  getListOfStudentsGroupSubject,
  getOneOfStudentsGroupSubject,
  getManyOfStudentsGroupSubject,
  deleteOfStudentsGroupSubject,
  createOfStudentsGroupSubject,
  updateOfStudentsGroupSubject,
  getManyReferenceOfStudentsGroupSubject,
  getListOfStudentsGroupSubjectResult,
  getOneOfStudentsGroupSubjectResult,
  getManyOfStudentsGroupSubjectResult,
  deleteOfStudentsGroupSubjectResult,
  createOfStudentsGroupSubjectResult,
  updateOfStudentsGroupSubjectResult,
  getManyReferenceOfStudentsGroupSubjectResult,
} from './queries';

export const resource = ({ queries, resources }) => ({
  GET_LIST: GET_LIST({ queries, resources }),
  GET_ONE: GET_ONE({ queries, resources }),
  CREATE: CREATE({ queries, resources }),
  UPDATE: UPDATE({ queries, resources }),
  DELETE: DELETE({ queries, resources }),
  GET_MANY: GET_MANY({ queries, resources }),
  GET_MANY_REFERENCE: GET_MANY_REFERENCE({ queries, resources }),
});

export const queries = {
  GET_LIST: getListOfStudentsGroupSubject,
  GET_ONE: getOneOfStudentsGroupSubject,
  GET_MANY: getManyOfStudentsGroupSubject,
  GET_MANY_REFERENCE: getManyReferenceOfStudentsGroupSubject,
  CREATE: createOfStudentsGroupSubject,
  UPDATE: updateOfStudentsGroupSubject,
  DELETE: deleteOfStudentsGroupSubject,
  GET_LIST_RESULT: getListOfStudentsGroupSubjectResult,
  GET_ONE_RESULT: getOneOfStudentsGroupSubjectResult,
  GET_MANY_RESULT: getManyOfStudentsGroupSubjectResult,
  GET_MANY_REFERENCE_RESULT: getManyReferenceOfStudentsGroupSubjectResult,
  CREATE_RESULT: createOfStudentsGroupSubjectResult,
  UPDATE_RESULT: updateOfStudentsGroupSubjectResult,
  DELETE_RESULT: deleteOfStudentsGroupSubjectResult,
};
