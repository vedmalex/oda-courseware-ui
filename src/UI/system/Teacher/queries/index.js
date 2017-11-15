import GET_LIST from './getList';
import GET_ONE from './getOne';
import CREATE from './create';
import UPDATE from './update';
import DELETE from './delete';
import GET_MANY from './getMany';
import GET_MANY_REFERENCE from './getManyReference';
import {
  getListOfTeacher,
  getOneOfTeacher,
  getManyOfTeacher,
  deleteOfTeacher,
  createOfTeacher,
  updateOfTeacher,
  getManyReferenceOfTeacher,
  getListOfTeacherResult,
  getOneOfTeacherResult,
  getManyOfTeacherResult,
  deleteOfTeacherResult,
  createOfTeacherResult,
  updateOfTeacherResult,
  getManyReferenceOfTeacherResult,
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
  GET_LIST: getListOfTeacher,
  GET_ONE: getOneOfTeacher,
  GET_MANY: getManyOfTeacher,
  GET_MANY_REFERENCE: getManyReferenceOfTeacher,
  CREATE: createOfTeacher,
  UPDATE: updateOfTeacher,
  DELETE: deleteOfTeacher,
  GET_LIST_RESULT: getListOfTeacherResult,
  GET_ONE_RESULT: getOneOfTeacherResult,
  GET_MANY_RESULT: getManyOfTeacherResult,
  GET_MANY_REFERENCE_RESULT: getManyReferenceOfTeacherResult,
  CREATE_RESULT: createOfTeacherResult,
  UPDATE_RESULT: updateOfTeacherResult,
  DELETE_RESULT: deleteOfTeacherResult,
};
