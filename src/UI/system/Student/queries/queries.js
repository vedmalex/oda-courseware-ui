import gql from 'graphql-tag';
// fragments

const resultFragment = gql`fragment StudentResult on Student{
  id

  personId: person @_(get:"id") {
    id
  }
  groupId: group @_(get:"id") {
    id
  }
}
`;

const fullFragment = gql`fragment StudentFull on Student{
    id
    person{
      id
    }
    group{
      id
    }
  }
`;

// getList
export const getListOfStudentResult = gql`query getListOfStudentResult {
  items {
    total: pageInfo @_(get:"count") {
      count
    }
    data: edges @_(each:{assign:"node"}) {
      node {
        ...StudentResult
      }
    }
  }
}
${resultFragment}
`;

export const getListOfStudent = gql`query getListOfStudent($skip: Int, $limit: Int, $orderBy: [StudentSortOrder], $filter: StudentComplexFilter){
  items: students(skip:$skip, limit: $limit, orderBy: $orderBy, filter: $filter) {
    pageInfo{
      count
    }
    edges {
      node {
        ...StudentFull
      }
    }
  }
}
${fullFragment}
`;

//getOne
export const getOneOfStudentResult = gql`{
  item {
    ...StudentResult
  }
}
${resultFragment}
`;

export const getOneOfStudent = gql`query Student($id: ID){
  item: student(id: $id) {
    ...StudentFull
  }
}
${fullFragment}
`;

// getMany
export const getManyOfStudentResult = gql`{
  items @_(get:"edges"){
    edges @_(map: "node")  {
      node {
        ...StudentResult
      }
    }
  }
}
${resultFragment}
`;

export const getManyOfStudent = gql`query Students($filter: StudentComplexFilter){
  items: students(filter: $filter) {
    edges {
      node {
        ...StudentFull
      }
    }
  }
}
${fullFragment}
`;

//delete
export const deleteOfStudentResult = gql`{
  item @_(get:"node"){
    node {
      ...StudentResult
    }
  }
}
${resultFragment}
`;

export const deleteOfStudent = gql`mutation deleteStudent ($input : deleteStudentInput!) {
  item: deleteStudent (input: $input) {
    node: student {
      ...StudentFull
    }
  }
}
${fullFragment}
`;

//create
export const createOfStudentResult = gql`{
  item @_(get: "edge.node") {
    edge {
      node {
        ...StudentResult
      }
    }
  }
}
${resultFragment}
`;

export const createOfStudent = gql`mutation createStudent($input: createStudentInput!){
  item : createStudent (input : $input) {
    edge: student {
      node {
        ...StudentFull
      }
    }
  }
}
${fullFragment}
`;

//update
export const updateOfStudentResult = gql`{
  item @_(get:"node"){
    node {
      ...StudentResult
    }
  }
}
${resultFragment}
`;

export const updateOfStudent = gql`mutation updateStudent($input: updateStudentInput!){
      item : updateStudent (input : $input) {
        node: student {
          ...StudentFull
        }
      }
    }
  ${fullFragment}
`;

//getManyReference
export const getManyReferenceOfStudent = {

  person: gql`query Person_Id($skip: Int, $limit: Int, $orderBy: [StudentSortOrder], $filter: StudentComplexFilter){
    items: students(skip:$skip, limit: $limit, orderBy: $orderBy, filter: $filter) {
      pageInfo{
        count
      }
      edges {
        node {
          ...StudentFull
        }
      }
    }
  }
  ${fullFragment}
`,

  group: gql`query Group_Id($skip: Int, $limit: Int, $orderBy: [StudentSortOrder], $filter: StudentComplexFilter){
    items: students(skip:$skip, limit: $limit, orderBy: $orderBy, filter: $filter) {
      pageInfo{
        count
      }
      edges {
        node {
          ...StudentFull
        }
      }
    }
  }
  ${fullFragment}
`,
};

export const getManyReferenceOfStudentResultOpposite = gql`{
  items: opposite @_(get:"items") {
    items {
      total: pageInfo @_(get:"count") {
        count
      }
      data: edges @_(each:{assign:"node"}) {
        node {
          ...StudentResult
        }
      }
    }
  }
}
  ${resultFragment}
`;

export const getManyReferenceOfStudentResultRegular = gql`{
  items {
    total: pageInfo @_(get:"count") {
      count
    }
    data: edges @_(each:{assign:"node"}) {
      node {
        ...StudentResult
      }
    }
  }
}
  ${resultFragment}
`;

export const getManyReferenceOfStudentResult = {

  person: getManyReferenceOfStudentResultRegular,

  group: getManyReferenceOfStudentResultRegular,
};

