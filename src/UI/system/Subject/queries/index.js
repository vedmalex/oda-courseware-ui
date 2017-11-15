import GET_LIST from './getList';
import GET_ONE from './getOne';
import CREATE from './create';
import UPDATE from './update';
import DELETE from './delete';
import GET_MANY from './getMany';
import GET_MANY_REFERENCE from './getManyReference';
import {
  getListOfSubject,
  getOneOfSubject,
  getManyOfSubject,
  deleteOfSubject,
  createOfSubject,
  updateOfSubject,
  getManyReferenceOfSubject,
  getListOfSubjectResult,
  getOneOfSubjectResult,
  getManyOfSubjectResult,
  deleteOfSubjectResult,
  createOfSubjectResult,
  updateOfSubjectResult,
  getManyReferenceOfSubjectResult,
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
  GET_LIST: getListOfSubject,
  GET_ONE: getOneOfSubject,
  GET_MANY: getManyOfSubject,
  GET_MANY_REFERENCE: getManyReferenceOfSubject,
  CREATE: createOfSubject,
  UPDATE: updateOfSubject,
  DELETE: deleteOfSubject,
  GET_LIST_RESULT: getListOfSubjectResult,
  GET_ONE_RESULT: getOneOfSubjectResult,
  GET_MANY_RESULT: getManyOfSubjectResult,
  GET_MANY_REFERENCE_RESULT: getManyReferenceOfSubjectResult,
  CREATE_RESULT: createOfSubjectResult,
  UPDATE_RESULT: updateOfSubjectResult,
  DELETE_RESULT: deleteOfSubjectResult,
};
