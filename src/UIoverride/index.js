import PersonUIX from './Person/uix';
import PlanetUIX from './Planet/uix';
import Admin from './admin';
import { queries, uix as _uix, resources } from './../UI';


export { Admin };
console.log(_uix, PersonUIX);
export const uix = {
  ..._uix,

  Person: {
    ..._uix.Person,
    ...PersonUIX,
  },
  Planet: {
    ..._uix.Planet,
    ...PlanetUIX,
  },
}

export { queries, resources }
