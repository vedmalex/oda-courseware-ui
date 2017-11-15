import GET_LIST from './getList';
import GET_ONE from './getOne';
import CREATE from './create';
import UPDATE from './update';
import DELETE from './delete';
import GET_MANY from './getMany';
import GET_MANY_REFERENCE from './getManyReference';
import {
  getListOfStudentProfile,
  getOneOfStudentProfile,
  getManyOfStudentProfile,
  deleteOfStudentProfile,
  createOfStudentProfile,
  updateOfStudentProfile,
  getManyReferenceOfStudentProfile,
  getListOfStudentProfileResult,
  getOneOfStudentProfileResult,
  getManyOfStudentProfileResult,
  deleteOfStudentProfileResult,
  createOfStudentProfileResult,
  updateOfStudentProfileResult,
  getManyReferenceOfStudentProfileResult,
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
  GET_LIST: getListOfStudentProfile,
  GET_ONE: getOneOfStudentProfile,
  GET_MANY: getManyOfStudentProfile,
  GET_MANY_REFERENCE: getManyReferenceOfStudentProfile,
  CREATE: createOfStudentProfile,
  UPDATE: updateOfStudentProfile,
  DELETE: deleteOfStudentProfile,
  GET_LIST_RESULT: getListOfStudentProfileResult,
  GET_ONE_RESULT: getOneOfStudentProfileResult,
  GET_MANY_RESULT: getManyOfStudentProfileResult,
  GET_MANY_REFERENCE_RESULT: getManyReferenceOfStudentProfileResult,
  CREATE_RESULT: createOfStudentProfileResult,
  UPDATE_RESULT: updateOfStudentProfileResult,
  DELETE_RESULT: deleteOfStudentProfileResult,
};
