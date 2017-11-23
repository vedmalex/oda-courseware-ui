import UserResource from './User/queries';
import StudentResource from './Student/queries';
import CuratorResource from './Curator/queries';
import GroupResource from './Group/queries';
import PersonResource from './Person/queries';
import SocialNetworkResource from './SocialNetwork/queries';
import SocialNetworkTypeResource from './SocialNetworkType/queries';
import EmailResource from './Email/queries';
import EmailTypeResource from './EmailType/queries';
import PhoneResource from './Phone/queries';
import PhoneTypeResource from './PhoneType/queries';

import UserUIX from './User/uix';
import StudentUIX from './Student/uix';
import CuratorUIX from './Curator/uix';
import GroupUIX from './Group/uix';
import PersonUIX from './Person/uix';
import SocialNetworkUIX from './SocialNetwork/uix';
import SocialNetworkTypeUIX from './SocialNetworkType/uix';
import EmailUIX from './Email/uix';
import EmailTypeUIX from './EmailType/uix';
import PhoneUIX from './Phone/uix';
import PhoneTypeUIX from './PhoneType/uix';
import { data } from 'oda-aor-rest';

import Admin from './admin';

export { Admin };

export class Resources extends data.resource.ResourceContainer {
  constructor(...args){
    super(...args);
    this.override([
      new UserResource(),
      new StudentResource(),
      new CuratorResource(),
      new GroupResource(),
      new PersonResource(),
      new SocialNetworkResource(),
      new SocialNetworkTypeResource(),
      new EmailResource(),
      new EmailTypeResource(),
      new PhoneResource(),
      new PhoneTypeResource(),
    ]);
  }
}

export const uix = {
  User: UserUIX,
  Student: StudentUIX,
  Curator: CuratorUIX,
  Group: GroupUIX,
  Person: PersonUIX,
  SocialNetwork: SocialNetworkUIX,
  SocialNetworkType: SocialNetworkTypeUIX,
  Email: EmailUIX,
  EmailType: EmailTypeUIX,
  Phone: PhoneUIX,
  PhoneType: PhoneTypeUIX,
};
