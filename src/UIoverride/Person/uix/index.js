import loadable from 'loadable-components'

const Filter = loadable(() => import('./filter'));
const Form = loadable(() => import('./form'));
const Show = loadable(() => import('./show'));
const Grid = loadable(() => import('./grid'));
const Title = loadable(() => import('./title'));

export default {
  Filter,
  Form,
  Show,
  Grid,
  Title,
};
