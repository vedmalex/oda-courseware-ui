import PersonUIX from './Person/uix';
import CuratorUIX from './Curator/uix';
// import PlanetUIX from './Planet/uix';
import Admin from './admin';
import { uix as _uix, Resources as ResourcesBase } from './../UI/system';
import personResource from './Person/queries';
import curatorResource from './Curator/queries';

export { Admin };
// export { uix };

export const uix = {
  ..._uix,

  Person: {
    ..._uix.Person,
    ...PersonUIX,
  },
  Curator: {
    ..._uix.Curator,
    ...CuratorUIX,
  },
}



export class Resources extends ResourcesBase {
  constructor(...args) {
    super(...args);
    this.resource('Person').override(personResource);
    this.resource('Curator').override(curatorResource);
  }
}

