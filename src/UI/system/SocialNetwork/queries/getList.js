import { data } from 'oda-aor-rest';
import set from 'lodash/set';

export default class extends data.resource.operations.GetList {
  // constructor(options, resource){
  //   super(options, resource);
  // }
  _filterBy = (params) => Object.keys(params.filter).reduce((acc, key) => {
    if (key === 'ids') {
      return { ...acc, id: { in: params.filter[key] } };
    }
    if (key === 'q') {
      return { ...acc, account: { imatch: params.filter[key] } };
    }
    return set(acc, key.replace('-', '.'), params.filter[key]);
  }, {})
}
