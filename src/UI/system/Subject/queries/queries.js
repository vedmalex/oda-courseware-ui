import gql from 'graphql-tag';
// fragments

const resultFragment = gql`fragment SubjectResult on Subject{
  id
  name

  groupsIds: groups @_(get:"edges") {
    edges @_(map:"node") {
      node @_(get:"id") {
        id
      }
    }
  }
  teacherId: teacher @_(get:"id") {
    id
  }
}
`;

const fullFragment = gql`fragment SubjectFull on Subject{
    id
    name
    groups{
      edges {
        node {
          id
        }
      }
    }
    teacher{
      id
    }
  }
`;

// getList
export const getListOfSubjectResult = gql`query getListOfSubjectResult {
  items {
    total: pageInfo @_(get:"count") {
      count
    }
    data: edges @_(each:{assign:"node"}) {
      node {
        ...SubjectResult
      }
    }
  }
}
${resultFragment}
`;

export const getListOfSubject = gql`query getListOfSubject($skip: Int, $limit: Int, $orderBy: [SubjectSortOrder], $filter: SubjectComplexFilter){
  items: subjects(skip:$skip, limit: $limit, orderBy: $orderBy, filter: $filter) {
    pageInfo{
      count
    }
    edges {
      node {
        ...SubjectFull
      }
    }
  }
}
${fullFragment}
`;

//getOne
export const getOneOfSubjectResult = gql`{
  item {
    ...SubjectResult
  }
}
${resultFragment}
`;

export const getOneOfSubject = gql`query Subject($id: ID){
  item: subject(id: $id) {
    ...SubjectFull
  }
}
${fullFragment}
`;

// getMany
export const getManyOfSubjectResult = gql`{
  items @_(get:"edges"){
    edges @_(map: "node")  {
      node {
        ...SubjectResult
      }
    }
  }
}
${resultFragment}
`;

export const getManyOfSubject = gql`query Subjects($filter: SubjectComplexFilter){
  items: subjects(filter: $filter) {
    edges {
      node {
        ...SubjectFull
      }
    }
  }
}
${fullFragment}
`;

//delete
export const deleteOfSubjectResult = gql`{
  item @_(get:"node"){
    node {
      ...SubjectResult
    }
  }
}
${resultFragment}
`;

export const deleteOfSubject = gql`mutation deleteSubject ($input : deleteSubjectInput!) {
  item: deleteSubject (input: $input) {
    node: subject {
      ...SubjectFull
    }
  }
}
${fullFragment}
`;

//create
export const createOfSubjectResult = gql`{
  item @_(get: "edge.node") {
    edge {
      node {
        ...SubjectResult
      }
    }
  }
}
${resultFragment}
`;

export const createOfSubject = gql`mutation createSubject($input: createSubjectInput!){
  item : createSubject (input : $input) {
    edge: subject {
      node {
        ...SubjectFull
      }
    }
  }
}
${fullFragment}
`;

//update
export const updateOfSubjectResult = gql`{
  item @_(get:"node"){
    node {
      ...SubjectResult
    }
  }
}
${resultFragment}
`;

export const updateOfSubject = gql`mutation updateSubject($input: updateSubjectInput!){
      item : updateSubject (input : $input) {
        node: subject {
          ...SubjectFull
        }
      }
    }
  ${fullFragment}
`;

//getManyReference
export const getManyReferenceOfSubject = {
  groups: gql`query Groups_Id($id: ID, $skip: Int, $limit: Int, $orderBy: [SubjectSortOrder], $filter: SubjectComplexFilter){
    opposite: studentsGroup(id:$id){
      id
      items: subjects(skip:$skip, limit: $limit, orderBy: $orderBy, filter: $filter) {
        pageInfo{
          count
        }
        edges {
          node {
            ...SubjectFull
          }
        }
      }
    }
  }
  ${fullFragment}
`,

  teacher: gql`query Teacher_Id($skip: Int, $limit: Int, $orderBy: [SubjectSortOrder], $filter: SubjectComplexFilter){
    items: subjects(skip:$skip, limit: $limit, orderBy: $orderBy, filter: $filter) {
      pageInfo{
        count
      }
      edges {
        node {
          ...SubjectFull
        }
      }
    }
  }
  ${fullFragment}
`,
};

export const getManyReferenceOfSubjectResultOpposite = gql`{
  items: opposite @_(get:"items") {
    items {
      total: pageInfo @_(get:"count") {
        count
      }
      data: edges @_(each:{assign:"node"}) {
        node {
          ...SubjectResult
        }
      }
    }
  }
}
  ${resultFragment}
`;

export const getManyReferenceOfSubjectResultRegular = gql`{
  items {
    total: pageInfo @_(get:"count") {
      count
    }
    data: edges @_(each:{assign:"node"}) {
      node {
        ...SubjectResult
      }
    }
  }
}
  ${resultFragment}
`;

export const getManyReferenceOfSubjectResult = {
  groups: getManyReferenceOfSubjectResultOpposite,

  teacher: getManyReferenceOfSubjectResultRegular,
};
