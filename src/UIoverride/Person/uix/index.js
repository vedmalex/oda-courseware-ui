import loadable from 'loadable-components'

const Filter = loadable(() => import('./filter'));
const Form = loadable(() => import('./form'));
const Show = loadable(() => import('./show'));
const Title = loadable(() => import('./title'));

export default {
  Filter,
  Form,
  Show,
  Title,
};
