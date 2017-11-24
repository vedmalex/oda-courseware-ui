import GetList from './getList';
import { data } from 'oda-aor-rest';

import getList from './getList';

export default {
  query: {
    GET_LIST: { ...getList }
  }
};
