import React from "react";
import PropTypes from 'prop-types';
import {
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  SimpleForm,
  TextInput,
  DateInput,
  NumberInput,
  BooleanInput,
  RichTextInput,
  NullableBooleanInput,
  Filter,
} from "admin-on-rest";

const FilterPanel = (props, {translate}) => (
  <Filter {...props} >
    <NullableBooleanInput label={translate("uix.filter.exists",{ name: translate('resources.SubjectCourse.fields.subject')})} source="subject-exists" />

    <TextInput label={translate("uix.filter.exists",{ name: translate('resources.SubjectCourse.fields.subject')})} source="subject-imatch" allowEmpty />
    <SelectArrayInput label={translate("uix.filter.in",{ name: translate('resources.SubjectCourse.fields.subject')})} source="subject-in" allowEmpty />
    <SelectArrayInput label={translate("uix.filter.nin",{ name: translate('resources.SubjectCourse.fields.subject')})} source="subject-nin" allowEmpty />
    <NullableBooleanInput label={translate("uix.filter.exists",{ name: translate('resources.SubjectCourse.fields.course')})} source="course-exists" />

    <TextInput label={translate("uix.filter.exists",{ name: translate('resources.SubjectCourse.fields.course')})} source="course-imatch" allowEmpty />
    <SelectArrayInput label={translate("uix.filter.in",{ name: translate('resources.SubjectCourse.fields.course')})} source="course-in" allowEmpty />
    <SelectArrayInput label={translate("uix.filter.nin",{ name: translate('resources.SubjectCourse.fields.course')})} source="course-nin" allowEmpty />

  </Filter>
);

FilterPanel.contextTypes = {
  translate: PropTypes.func.isRequired,
}

export default FilterPanel;
