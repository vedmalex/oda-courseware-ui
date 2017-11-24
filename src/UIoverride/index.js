import PersonUIX from './Person/uix';
// import PlanetUIX from './Planet/uix';
import Admin from './admin';
import { uix as _uix, Resources as ResourcesBase } from './../UI/system';
import personResource from './Person/queries';

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



export class Resources extends ResourcesBase {
  constructor(...args) {
    super(...args);
    this.resource('Person').override(personResource);
  }
}

