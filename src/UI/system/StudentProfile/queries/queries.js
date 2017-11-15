import gql from 'graphql-tag';
// fragments

const resultFragment = gql`fragment StudentProfileResult on StudentProfile{
  id
  maths
  physics
  language

  studentId: student @_(get:"id") {
    id
  }
}
`;

const fullFragment = gql`fragment StudentProfileFull on StudentProfile{
    id
    maths
    physics
    language
    student{
      id
    }
  }
`;

// getList
export const getListOfStudentProfileResult = gql`query getListOfStudentProfileResult {
  items {
    total: pageInfo @_(get:"count") {
      count
    }
    data: edges @_(each:{assign:"node"}) {
      node {
        ...StudentProfileResult
      }
    }
  }
}
${resultFragment}
`;

export const getListOfStudentProfile = gql`query getListOfStudentProfile($skip: Int, $limit: Int, $orderBy: [StudentProfileSortOrder], $filter: StudentProfileComplexFilter){
  items: studentProfiles(skip:$skip, limit: $limit, orderBy: $orderBy, filter: $filter) {
    pageInfo{
      count
    }
    edges {
      node {
        ...StudentProfileFull
      }
    }
  }
}
${fullFragment}
`;

//getOne
export const getOneOfStudentProfileResult = gql`{
  item {
    ...StudentProfileResult
  }
}
${resultFragment}
`;

export const getOneOfStudentProfile = gql`query StudentProfile($id: ID){
  item: studentProfile(id: $id) {
    ...StudentProfileFull
  }
}
${fullFragment}
`;

// getMany
export const getManyOfStudentProfileResult = gql`{
  items @_(get:"edges"){
    edges @_(map: "node")  {
      node {
        ...StudentProfileResult
      }
    }
  }
}
${resultFragment}
`;

export const getManyOfStudentProfile = gql`query StudentProfiles($filter: StudentProfileComplexFilter){
  items: studentProfiles(filter: $filter) {
    edges {
      node {
        ...StudentProfileFull
      }
    }
  }
}
${fullFragment}
`;

//delete
export const deleteOfStudentProfileResult = gql`{
  item @_(get:"node"){
    node {
      ...StudentProfileResult
    }
  }
}
${resultFragment}
`;

export const deleteOfStudentProfile = gql`mutation deleteStudentProfile ($input : deleteStudentProfileInput!) {
  item: deleteStudentProfile (input: $input) {
    node: studentProfile {
      ...StudentProfileFull
    }
  }
}
${fullFragment}
`;

//create
export const createOfStudentProfileResult = gql`{
  item @_(get: "edge.node") {
    edge {
      node {
        ...StudentProfileResult
      }
    }
  }
}
${resultFragment}
`;

export const createOfStudentProfile = gql`mutation createStudentProfile($input: createStudentProfileInput!){
  item : createStudentProfile (input : $input) {
    edge: studentProfile {
      node {
        ...StudentProfileFull
      }
    }
  }
}
${fullFragment}
`;

//update
export const updateOfStudentProfileResult = gql`{
  item @_(get:"node"){
    node {
      ...StudentProfileResult
    }
  }
}
${resultFragment}
`;

export const updateOfStudentProfile = gql`mutation updateStudentProfile($input: updateStudentProfileInput!){
      item : updateStudentProfile (input : $input) {
        node: studentProfile {
          ...StudentProfileFull
        }
      }
    }
  ${fullFragment}
`;

//getManyReference
export const getManyReferenceOfStudentProfile = {

  student: gql`query Student_Id($skip: Int, $limit: Int, $orderBy: [StudentProfileSortOrder], $filter: StudentProfileComplexFilter){
    items: studentProfiles(skip:$skip, limit: $limit, orderBy: $orderBy, filter: $filter) {
      pageInfo{
        count
      }
      edges {
        node {
          ...StudentProfileFull
        }
      }
    }
  }
  ${fullFragment}
`,
};

export const getManyReferenceOfStudentProfileResultOpposite = gql`{
  items: opposite @_(get:"items") {
    items {
      total: pageInfo @_(get:"count") {
        count
      }
      data: edges @_(each:{assign:"node"}) {
        node {
          ...StudentProfileResult
        }
      }
    }
  }
}
  ${resultFragment}
`;

export const getManyReferenceOfStudentProfileResultRegular = gql`{
  items {
    total: pageInfo @_(get:"count") {
      count
    }
    data: edges @_(each:{assign:"node"}) {
      node {
        ...StudentProfileResult
      }
    }
  }
}
  ${resultFragment}
`;

export const getManyReferenceOfStudentProfileResult = {

  student: getManyReferenceOfStudentProfileResultRegular,
};
