import loadable from 'loadable-components'

const Show = loadable(() => import('./show'));
const Grid = loadable(() => import('./grid'));
const List = loadable(() => import('./list'));

export default {
  Show,
  List,
  Grid,
};
