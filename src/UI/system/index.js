import { queries as UserQuery, resource as UserResource } from './User/queries';
import { queries as StudentQuery, resource as StudentResource } from './Student/queries';
import { queries as StudentsGroupQuery, resource as StudentsGroupResource } from './StudentsGroup/queries';
import { queries as StudentProfileQuery, resource as StudentProfileResource } from './StudentProfile/queries';
import { queries as TeacherQuery, resource as TeacherResource } from './Teacher/queries';
import { queries as SubjectQuery, resource as SubjectResource } from './Subject/queries';
import { queries as FollowingQuery, resource as FollowingResource } from './Following/queries';
import { queries as StudentsGroupSubjectQuery, resource as StudentsGroupSubjectResource } from './StudentsGroupSubject/queries';

import UserUIX from './User/uix';
import StudentUIX from './Student/uix';
import StudentsGroupUIX from './StudentsGroup/uix';
import StudentProfileUIX from './StudentProfile/uix';
import TeacherUIX from './Teacher/uix';
import SubjectUIX from './Subject/uix';
import FollowingUIX from './Following/uix';
import StudentsGroupSubjectUIX from './StudentsGroupSubject/uix';

import Admin from './admin';

export { Admin };

// здесь класс как в коннекторах было.
// использовать через get; чтобы можно было override делать без проблем.

export const queries = {
  User: UserQuery,
  Student: StudentQuery,
  StudentsGroup: StudentsGroupQuery,
  StudentProfile: StudentProfileQuery,
  Teacher: TeacherQuery,
  Subject: SubjectQuery,
  Following: FollowingQuery,
  StudentsGroupSubject: StudentsGroupSubjectQuery,
};

export const resources = ({ queries }) => ({
  User: UserResource({ resources, queries }),
  Student: StudentResource({ resources, queries }),
  StudentsGroup: StudentsGroupResource({ resources, queries }),
  StudentProfile: StudentProfileResource({ resources, queries }),
  Teacher: TeacherResource({ resources, queries }),
  Subject: SubjectResource({ resources, queries }),
  Following: FollowingResource({ resources, queries }),
  StudentsGroupSubject: StudentsGroupSubjectResource({ resources, queries }),
});

export const uix = {
  User: UserUIX,
  Student: StudentUIX,
  StudentsGroup: StudentsGroupUIX,
  StudentProfile: StudentProfileUIX,
  Teacher: TeacherUIX,
  Subject: SubjectUIX,
  Following: FollowingUIX,
  StudentsGroupSubject: StudentsGroupSubjectUIX,
};
