import React from 'react';
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

export default [
  { name: 'User', icon: <Account /> },
  { name: 'Student', icon: <People /> },
  { name: 'Curator', icon: <School /> },
  { name: 'Group', icon: <Group /> },
  { name: 'Person', icon: <Contacts /> },
  { name: 'SocialNetworkType', icon: <Pages /> },
  { name: 'EmailType', icon: <Mail /> },
  { name: 'PhoneType', icon: <Phone /> },
];
