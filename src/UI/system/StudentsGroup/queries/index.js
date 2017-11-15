import GET_LIST from './getList';
import GET_ONE from './getOne';
import CREATE from './create';
import UPDATE from './update';
import DELETE from './delete';
import GET_MANY from './getMany';
import GET_MANY_REFERENCE from './getManyReference';
import {
  getListOfStudentsGroup,
  getOneOfStudentsGroup,
  getManyOfStudentsGroup,
  deleteOfStudentsGroup,
  createOfStudentsGroup,
  updateOfStudentsGroup,
  getManyReferenceOfStudentsGroup,
  getListOfStudentsGroupResult,
  getOneOfStudentsGroupResult,
  getManyOfStudentsGroupResult,
  deleteOfStudentsGroupResult,
  createOfStudentsGroupResult,
  updateOfStudentsGroupResult,
  getManyReferenceOfStudentsGroupResult,
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
  GET_LIST: getListOfStudentsGroup,
  GET_ONE: getOneOfStudentsGroup,
  GET_MANY: getManyOfStudentsGroup,
  GET_MANY_REFERENCE: getManyReferenceOfStudentsGroup,
  CREATE: createOfStudentsGroup,
  UPDATE: updateOfStudentsGroup,
  DELETE: deleteOfStudentsGroup,
  GET_LIST_RESULT: getListOfStudentsGroupResult,
  GET_ONE_RESULT: getOneOfStudentsGroupResult,
  GET_MANY_RESULT: getManyOfStudentsGroupResult,
  GET_MANY_REFERENCE_RESULT: getManyReferenceOfStudentsGroupResult,
  CREATE_RESULT: createOfStudentsGroupResult,
  UPDATE_RESULT: updateOfStudentsGroupResult,
  DELETE_RESULT: deleteOfStudentsGroupResult,
};
