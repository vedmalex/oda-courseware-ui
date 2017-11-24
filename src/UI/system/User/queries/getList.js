import set from 'lodash/set';

export default {
  _filterBy: (params) => Object.keys(params.filter).reduce((acc, key) => {
    if (key === 'ids') {
      return { ...acc, id: { in: params.filter[key] } };
    }
    if (key === 'q') {
      return { ...acc, userName: { imatch: params.filter[key] } };
    }
    return set(acc, key.replace('-', '.'), params.filter[key]);
  }, {}),
}
