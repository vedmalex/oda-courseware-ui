import GET_LIST from './getList';
import GET_ONE from './getOne';
import CREATE from './create';
import UPDATE from './update';
import DELETE from './delete';
import GET_MANY from './getMany';
import GET_MANY_REFERENCE from './getManyReference';
import {
  getListOfFollowing,
  getOneOfFollowing,
  getManyOfFollowing,
  deleteOfFollowing,
  createOfFollowing,
  updateOfFollowing,
  getManyReferenceOfFollowing,
  getListOfFollowingResult,
  getOneOfFollowingResult,
  getManyOfFollowingResult,
  deleteOfFollowingResult,
  createOfFollowingResult,
  updateOfFollowingResult,
  getManyReferenceOfFollowingResult,
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
  GET_LIST: getListOfFollowing,
  GET_ONE: getOneOfFollowing,
  GET_MANY: getManyOfFollowing,
  GET_MANY_REFERENCE: getManyReferenceOfFollowing,
  CREATE: createOfFollowing,
  UPDATE: updateOfFollowing,
  DELETE: deleteOfFollowing,
  GET_LIST_RESULT: getListOfFollowingResult,
  GET_ONE_RESULT: getOneOfFollowingResult,
  GET_MANY_RESULT: getManyOfFollowingResult,
  GET_MANY_REFERENCE_RESULT: getManyReferenceOfFollowingResult,
  CREATE_RESULT: createOfFollowingResult,
  UPDATE_RESULT: updateOfFollowingResult,
  DELETE_RESULT: deleteOfFollowingResult,
};
