import PersonUIX from './Person/uix';
// import PlanetUIX from './Planet/uix';
import Admin from './admin';
import { uix as _uix, Resources } from './../UI/system';

export { Admin };
// export { uix };

export const uix = {
  ..._uix,

  Person: {
    ..._uix.Person,
    ...PersonUIX,
  },
  // Planet: {
  //   ..._uix.Planet,
  //   ...PlanetUIX,
  // },
}

export { Resources }
