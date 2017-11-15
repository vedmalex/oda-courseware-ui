import GET_LIST from './getList';
import GET_ONE from './getOne';
import CREATE from './create';
import UPDATE from './update';
import DELETE from './delete';
import GET_MANY from './getMany';
import GET_MANY_REFERENCE from './getManyReference';
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
  GET_LIST: getListOfStudent,
  GET_ONE: getOneOfStudent,
  GET_MANY: getManyOfStudent,
  GET_MANY_REFERENCE: getManyReferenceOfStudent,
  CREATE: createOfStudent,
  UPDATE: updateOfStudent,
  DELETE: deleteOfStudent,
  GET_LIST_RESULT: getListOfStudentResult,
  GET_ONE_RESULT: getOneOfStudentResult,
  GET_MANY_RESULT: getManyOfStudentResult,
  GET_MANY_REFERENCE_RESULT: getManyReferenceOfStudentResult,
  CREATE_RESULT: createOfStudentResult,
  UPDATE_RESULT: updateOfStudentResult,
  DELETE_RESULT: deleteOfStudentResult,
};
