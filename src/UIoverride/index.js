import PersonUIX from './Person/uix';
// import CuratorUIX from './Curator/uix';
import StudentUIX from './Student/uix';
import GroupUIX from './Group/uix';
import MeetingUIX from './Meeting/uix';
import Admin from './admin';
import { uix as _uix, Resources as ResourcesBase } from './../UI/system';
import personResource from './Person/queries';
import studentResource from './Student/queries';

export { Admin };
// export { uix };

export const uix = {
  ..._uix,
  "system/Person": {
    ..._uix.Person,
    ...PersonUIX,
  },
  "system/Student": {
    ..._uix.Student,
    ...StudentUIX,
  },
  "system/Meeting": {
    ..._uix.Meeting,
    ...MeetingUIX,
  }
}

export class Resources extends ResourcesBase {
  constructor(...args) {
    super(...args);
    this.resource('system/Person').override(personResource);
    this.resource('system/Student').override(studentResource);
  }
}

