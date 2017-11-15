import gql from 'graphql-tag';
// fragments

const resultFragment = gql`fragment StudentsGroupSubjectResult on StudentsGroupSubject{
  id
  subject
  studentsGroup

}
`;

const fullFragment = gql`fragment StudentsGroupSubjectFull on StudentsGroupSubject{
    id
    subject
    studentsGroup
  }
`;

// getList
export const getListOfStudentsGroupSubjectResult = gql`query getListOfStudentsGroupSubjectResult {
  items {
    total: pageInfo @_(get:"count") {
      count
    }
    data: edges @_(each:{assign:"node"}) {
      node {
        ...StudentsGroupSubjectResult
      }
    }
  }
}
${resultFragment}
`;

export const getListOfStudentsGroupSubject = gql`query getListOfStudentsGroupSubject($skip: Int, $limit: Int, $orderBy: [StudentsGroupSubjectSortOrder], $filter: StudentsGroupSubjectComplexFilter){
  items: studentsGroupSubjects(skip:$skip, limit: $limit, orderBy: $orderBy, filter: $filter) {
    pageInfo{
      count
    }
    edges {
      node {
        ...StudentsGroupSubjectFull
      }
    }
  }
}
${fullFragment}
`;

//getOne
export const getOneOfStudentsGroupSubjectResult = gql`{
  item {
    ...StudentsGroupSubjectResult
  }
}
${resultFragment}
`;

export const getOneOfStudentsGroupSubject = gql`query StudentsGroupSubject($id: ID){
  item: studentsGroupSubject(id: $id) {
    ...StudentsGroupSubjectFull
  }
}
${fullFragment}
`;

// getMany
export const getManyOfStudentsGroupSubjectResult = gql`{
  items @_(get:"edges"){
    edges @_(map: "node")  {
      node {
        ...StudentsGroupSubjectResult
      }
    }
  }
}
${resultFragment}
`;

export const getManyOfStudentsGroupSubject = gql`query StudentsGroupSubjects($filter: StudentsGroupSubjectComplexFilter){
  items: studentsGroupSubjects(filter: $filter) {
    edges {
      node {
        ...StudentsGroupSubjectFull
      }
    }
  }
}
${fullFragment}
`;

//delete
export const deleteOfStudentsGroupSubjectResult = gql`{
  item @_(get:"node"){
    node {
      ...StudentsGroupSubjectResult
    }
  }
}
${resultFragment}
`;

export const deleteOfStudentsGroupSubject = gql`mutation deleteStudentsGroupSubject ($input : deleteStudentsGroupSubjectInput!) {
  item: deleteStudentsGroupSubject (input: $input) {
    node: studentsGroupSubject {
      ...StudentsGroupSubjectFull
    }
  }
}
${fullFragment}
`;

//create
export const createOfStudentsGroupSubjectResult = gql`{
  item @_(get: "edge.node") {
    edge {
      node {
        ...StudentsGroupSubjectResult
      }
    }
  }
}
${resultFragment}
`;

export const createOfStudentsGroupSubject = gql`mutation createStudentsGroupSubject($input: createStudentsGroupSubjectInput!){
  item : createStudentsGroupSubject (input : $input) {
    edge: studentsGroupSubject {
      node {
        ...StudentsGroupSubjectFull
      }
    }
  }
}
${fullFragment}
`;

//update
export const updateOfStudentsGroupSubjectResult = gql`{
  item @_(get:"node"){
    node {
      ...StudentsGroupSubjectResult
    }
  }
}
${resultFragment}
`;

export const updateOfStudentsGroupSubject = gql`mutation updateStudentsGroupSubject($input: updateStudentsGroupSubjectInput!){
      item : updateStudentsGroupSubject (input : $input) {
        node: studentsGroupSubject {
          ...StudentsGroupSubjectFull
        }
      }
    }
  ${fullFragment}
`;

//getManyReference
export const getManyReferenceOfStudentsGroupSubject = {
};

export const getManyReferenceOfStudentsGroupSubjectResultOpposite = gql`{
  items: opposite @_(get:"items") {
    items {
      total: pageInfo @_(get:"count") {
        count
      }
      data: edges @_(each:{assign:"node"}) {
        node {
          ...StudentsGroupSubjectResult
        }
      }
    }
  }
}
  ${resultFragment}
`;

export const getManyReferenceOfStudentsGroupSubjectResultRegular = gql`{
  items {
    total: pageInfo @_(get:"count") {
      count
    }
    data: edges @_(each:{assign:"node"}) {
      node {
        ...StudentsGroupSubjectResult
      }
    }
  }
}
  ${resultFragment}
`;

export const getManyReferenceOfStudentsGroupSubjectResult = {
};
