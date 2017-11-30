import loadable from 'loadable-components'

const Title = loadable(() => import('./title'));
const Form = loadable(() => import('./form'));
const Grid = loadable(() => import('./grid'));

export default {
  Form,
  Grid,
  Title,
};
