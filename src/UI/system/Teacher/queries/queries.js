import gql from 'graphql-tag';
// fragments

const resultFragment = gql`fragment TeacherResult on Teacher{
  id
  firstName
  middleName
  lastName

  subjectsIds: subjects @_(get:"edges") {
    edges @_(map:"node") {
      node @_(get:"id") {
        id
      }
    }
  }
  userId: user @_(get:"id") {
    id
  }
}
`;

const fullFragment = gql`fragment TeacherFull on Teacher{
    id
    firstName
    middleName
    lastName
    subjects{
      edges {
        node {
          id
        }
      }
    }
    user{
      id
    }
  }
`;

// getList
export const getListOfTeacherResult = gql`query getListOfTeacherResult {
  items {
    total: pageInfo @_(get:"count") {
      count
    }
    data: edges @_(each:{assign:"node"}) {
      node {
        ...TeacherResult
      }
    }
  }
}
${resultFragment}
`;

export const getListOfTeacher = gql`query getListOfTeacher($skip: Int, $limit: Int, $orderBy: [TeacherSortOrder], $filter: TeacherComplexFilter){
  items: teachers(skip:$skip, limit: $limit, orderBy: $orderBy, filter: $filter) {
    pageInfo{
      count
    }
    edges {
      node {
        ...TeacherFull
      }
    }
  }
}
${fullFragment}
`;

//getOne
export const getOneOfTeacherResult = gql`{
  item {
    ...TeacherResult
  }
}
${resultFragment}
`;

export const getOneOfTeacher = gql`query Teacher($id: ID){
  item: teacher(id: $id) {
    ...TeacherFull
  }
}
${fullFragment}
`;

// getMany
export const getManyOfTeacherResult = gql`{
  items @_(get:"edges"){
    edges @_(map: "node")  {
      node {
        ...TeacherResult
      }
    }
  }
}
${resultFragment}
`;

export const getManyOfTeacher = gql`query Teachers($filter: TeacherComplexFilter){
  items: teachers(filter: $filter) {
    edges {
      node {
        ...TeacherFull
      }
    }
  }
}
${fullFragment}
`;

//delete
export const deleteOfTeacherResult = gql`{
  item @_(get:"node"){
    node {
      ...TeacherResult
    }
  }
}
${resultFragment}
`;

export const deleteOfTeacher = gql`mutation deleteTeacher ($input : deleteTeacherInput!) {
  item: deleteTeacher (input: $input) {
    node: teacher {
      ...TeacherFull
    }
  }
}
${fullFragment}
`;

//create
export const createOfTeacherResult = gql`{
  item @_(get: "edge.node") {
    edge {
      node {
        ...TeacherResult
      }
    }
  }
}
${resultFragment}
`;

export const createOfTeacher = gql`mutation createTeacher($input: createTeacherInput!){
  item : createTeacher (input : $input) {
    edge: teacher {
      node {
        ...TeacherFull
      }
    }
  }
}
${fullFragment}
`;

//update
export const updateOfTeacherResult = gql`{
  item @_(get:"node"){
    node {
      ...TeacherResult
    }
  }
}
${resultFragment}
`;

export const updateOfTeacher = gql`mutation updateTeacher($input: updateTeacherInput!){
      item : updateTeacher (input : $input) {
        node: teacher {
          ...TeacherFull
        }
      }
    }
  ${fullFragment}
`;

//getManyReference
export const getManyReferenceOfTeacher = {

  subjects: gql`query Subjects_Teacher($skip: Int, $limit: Int, $orderBy: [TeacherSortOrder], $filter: TeacherComplexFilter){
    items: teachers(skip:$skip, limit: $limit, orderBy: $orderBy, filter: $filter) {
      pageInfo{
        count
      }
      edges {
        node {
          ...TeacherFull
        }
      }
    }
  }
  ${fullFragment}
`,

  user: gql`query User_Id($skip: Int, $limit: Int, $orderBy: [TeacherSortOrder], $filter: TeacherComplexFilter){
    items: teachers(skip:$skip, limit: $limit, orderBy: $orderBy, filter: $filter) {
      pageInfo{
        count
      }
      edges {
        node {
          ...TeacherFull
        }
      }
    }
  }
  ${fullFragment}
`,
};

export const getManyReferenceOfTeacherResultOpposite = gql`{
  items: opposite @_(get:"items") {
    items {
      total: pageInfo @_(get:"count") {
        count
      }
      data: edges @_(each:{assign:"node"}) {
        node {
          ...TeacherResult
        }
      }
    }
  }
}
  ${resultFragment}
`;

export const getManyReferenceOfTeacherResultRegular = gql`{
  items {
    total: pageInfo @_(get:"count") {
      count
    }
    data: edges @_(each:{assign:"node"}) {
      node {
        ...TeacherResult
      }
    }
  }
}
  ${resultFragment}
`;

export const getManyReferenceOfTeacherResult = {

  subjects: getManyReferenceOfTeacherResultRegular,

  user: getManyReferenceOfTeacherResultRegular,
};
