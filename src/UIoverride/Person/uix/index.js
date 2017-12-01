import loadable from 'loadable-components'

const Filter = loadable(() => import('./filter'));
const Form = loadable(() => import('./form'));
const Show = loadable(() => import('./show'));
const Grid = loadable(() => import('./grid'));
const Title = loadable(() => import('./title'));
const Edit = loadable(() => import('./edit'));

export default {
  Edit,
  Filter,
  Form,
  Show,
  Grid,
  Title,
};
