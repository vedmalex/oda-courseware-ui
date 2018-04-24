import UserResource, {extension as UserExtension } from './User/queries';
import StudentResource, {extension as StudentExtension } from './Student/queries';
import CuratorResource, {extension as CuratorExtension } from './Curator/queries';
import GroupResource, {extension as GroupExtension } from './Group/queries';
import PersonResource, {extension as PersonExtension } from './Person/queries';
import SocialNetworkResource, {extension as SocialNetworkExtension } from './SocialNetwork/queries';
import SocialNetworkTypeResource, {extension as SocialNetworkTypeExtension } from './SocialNetworkType/queries';
import EmailResource, {extension as EmailExtension } from './Email/queries';
import EmailTypeResource, {extension as EmailTypeExtension } from './EmailType/queries';
import PhoneResource, {extension as PhoneExtension } from './Phone/queries';
import PhoneTypeResource, {extension as PhoneTypeExtension } from './PhoneType/queries';
import MeetingResource, {extension as MeetingExtension } from './Meeting/queries';
import StudentAttendanceResource, {extension as StudentAttendanceExtension } from './StudentAttendance/queries';
import CourseResource, {extension as CourseExtension } from './Course/queries';
import SubjectResource, {extension as SubjectExtension } from './Subject/queries';
import SubjectCourseResource, {extension as SubjectCourseExtension } from './SubjectCourse/queries';

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
import MeetingUIX from './Meeting/uix';
import StudentAttendanceUIX from './StudentAttendance/uix';
import CourseUIX from './Course/uix';
import SubjectUIX from './Subject/uix';
import SubjectCourseUIX from './SubjectCourse/uix';

import { data } from 'oda-aor-rest';

import Admin from './admin';

export { Admin };

export class Resources extends data.resource.ResourceContainer {
  constructor(...args){
    super(...args);
    this.override([
      UserResource,
      StudentResource,
      CuratorResource,
      GroupResource,
      PersonResource,
      SocialNetworkResource,
      SocialNetworkTypeResource,
      EmailResource,
      EmailTypeResource,
      PhoneResource,
      PhoneTypeResource,
      MeetingResource,
      StudentAttendanceResource,
      CourseResource,
      SubjectResource,
      SubjectCourseResource,
      ...UserExtension,
      ...StudentExtension,
      ...CuratorExtension,
      ...GroupExtension,
      ...PersonExtension,
      ...SocialNetworkExtension,
      ...SocialNetworkTypeExtension,
      ...EmailExtension,
      ...EmailTypeExtension,
      ...PhoneExtension,
      ...PhoneTypeExtension,
      ...MeetingExtension,
      ...StudentAttendanceExtension,
      ...CourseExtension,
      ...SubjectExtension,
      ...SubjectCourseExtension,
    ]);
  }
}

export const uix = {
  "system/User": UserUIX,
  "system/Student": StudentUIX,
  "system/Curator": CuratorUIX,
  "system/Group": GroupUIX,
  "system/Person": PersonUIX,
  "system/SocialNetwork": SocialNetworkUIX,
  "system/SocialNetworkType": SocialNetworkTypeUIX,
  "system/Email": EmailUIX,
  "system/EmailType": EmailTypeUIX,
  "system/Phone": PhoneUIX,
  "system/PhoneType": PhoneTypeUIX,
  "system/Meeting": MeetingUIX,
  "system/StudentAttendance": StudentAttendanceUIX,
  "system/Course": CourseUIX,
  "system/Subject": SubjectUIX,
  "system/SubjectCourse": SubjectCourseUIX,
};
