import GET_LIST from './getList';
import GET_ONE from './getOne';
import CREATE from './create';
import UPDATE from './update';
import DELETE from './delete';
import GET_MANY from './getMany';
import GET_MANY_REFERENCE from './getManyReference';
import {
  getListOfUser,
  getOneOfUser,
  getManyOfUser,
  deleteOfUser,
  createOfUser,
  updateOfUser,
  getManyReferenceOfUser,
  getListOfUserResult,
  getOneOfUserResult,
  getManyOfUserResult,
  deleteOfUserResult,
  createOfUserResult,
  updateOfUserResult,
  getManyReferenceOfUserResult,
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
  GET_LIST: getListOfUser,
  GET_ONE: getOneOfUser,
  GET_MANY: getManyOfUser,
  GET_MANY_REFERENCE: getManyReferenceOfUser,
  CREATE: createOfUser,
  UPDATE: updateOfUser,
  DELETE: deleteOfUser,
  GET_LIST_RESULT: getListOfUserResult,
  GET_ONE_RESULT: getOneOfUserResult,
  GET_MANY_RESULT: getManyOfUserResult,
  GET_MANY_REFERENCE_RESULT: getManyReferenceOfUserResult,
  CREATE_RESULT: createOfUserResult,
  UPDATE_RESULT: updateOfUserResult,
  DELETE_RESULT: deleteOfUserResult,
};
