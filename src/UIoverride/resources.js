import React from 'react';
import merge from 'lodash/merge';

import ListIcon from 'material-ui/svg-icons/action/view-list';
import Mail from 'material-ui/svg-icons/communication/contact-mail';
import Phone from 'material-ui/svg-icons/communication/contact-phone';
import Contacts from 'material-ui/svg-icons/communication/contacts';
import People from 'material-ui/svg-icons/social/people';
import Group from 'material-ui/svg-icons/social/group';
import Pages from 'material-ui/svg-icons/social/pages';
import School from 'material-ui/svg-icons/social/school';
import Library from 'material-ui/svg-icons/av/library-books';
import Account from 'material-ui/svg-icons/action/account-box';

import resources from '../UI/system/resources';

export default merge(
  {},
  resources,
  {
    'system/User': { icon: <Account />, name: 'User' },
    'system/Student': { icon: <People />, name: 'Student' },
    'system/Curator': { icon: <School />, name: 'Curator' },
    'system/Group': { icon: <Group />, name: 'Group' },
    'system/Person': { icon: <Contacts />, name: 'Person' },
    'system/SocialNetwork': { visible: false, name: 'SocialNetwork' },
    'system/SocialNetworkType': { icon: <Pages />, name: 'SocialNetworkType' },
    'system/Email': { visible: false, name: 'Email' },
    'system/EmailType': { icon: <Mail />, name: 'EmailType' },
    'system/Phone': { visible: false, name: 'Phone' },
    'system/PhoneType': { icon: <Phone />, name: 'PhoneType' },
    "system/Meeting": { icon: <ListIcon />, visible: true, name: 'Meeting' },
    "system/StudentAttendance": { icon: <ListIcon />, visible: true, name: 'StudentAttendance' },
    "system/Course": { icon: <ListIcon />, visible: true, name: 'Course' },
    "system/Subject": { icon: <ListIcon />, visible: true, name: 'Subject' },
    "system/SubjectCourse": { icon: <ListIcon />, visible: true, name: 'SubjectCourse' },
  }
);