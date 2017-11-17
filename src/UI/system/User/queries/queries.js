import gql from 'graphql-tag';
// fragments

const resultFragment = gql`fragment UserResult on User{
  id
  userName
  password
  isAdmin
  isSystem
  enabled

  asTeacherValues: asTeacher @_(get:"edges") {
    edges @_(map:"node") {
      node {
        id
      }
    }
  }
  asStudentValues: asStudent @_(get:"edges") {
    edges @_(map:"node") {
      node {
        id
      }
    }
  }
}
`;

const fullFragment = gql`fragment UserFull on User{
    id
    userName
    password
    isAdmin
    isSystem
    enabled
    asTeacher{
      edges {
        node {
          id
        }
      }
    }
    asStudent{
      edges {
        node {
          id
        }
      }
    }
  }
`;

// getList
export const getListOfUserResult = gql`query getListOfUserResult {
  items {
    total: pageInfo @_(get:"count") {
      count
    }
    data: edges @_(each:{assign:"node"}) {
      node {
        ...UserResult
      }
    }
  }
}
${resultFragment}
`;

export const getListOfUser = gql`query getListOfUser($skip: Int, $limit: Int, $orderBy: [UserSortOrder], $filter: UserComplexFilter){
  items: users(skip:$skip, limit: $limit, orderBy: $orderBy, filter: $filter) {
    pageInfo{
      count
    }
    edges {
      node {
        ...UserFull
      }
    }
  }
}
${fullFragment}
`;

//getOne
export const getOneOfUserResult = gql`{
  item {
    ...UserResult
  }
}
${resultFragment}
`;

export const getOneOfUser = gql`query User($id: ID){
  item: user(id: $id) {
    ...UserFull
  }
}
${fullFragment}
`;

// getMany
export const getManyOfUserResult = gql`{
  items @_(get:"edges"){
    edges @_(map: "node")  {
      node {
        ...UserResult
      }
    }
  }
}
${resultFragment}
`;

export const getManyOfUser = gql`query Users($filter: UserComplexFilter){
  items: users(filter: $filter) {
    edges {
      node {
        ...UserFull
      }
    }
  }
}
${fullFragment}
`;

//delete
export const deleteOfUserResult = gql`{
  item @_(get:"node"){
    node {
      ...UserResult
    }
  }
}
${resultFragment}
`;

export const deleteOfUser = gql`mutation deleteUser ($input : deleteUserInput!) {
  item: deleteUser (input: $input) {
    node: user {
      ...UserFull
    }
  }
}
${fullFragment}
`;

//create
export const createOfUserResult = gql`{
  item @_(get: "edge.node") {
    edge {
      node {
        ...UserResult
      }
    }
  }
}
${resultFragment}
`;

export const createOfUser = gql`mutation createUser($input: createUserInput!){
  item : createUser (input : $input) {
    edge: user {
      node {
        ...UserFull
      }
    }
  }
}
${fullFragment}
`;

//update
export const updateOfUserResult = gql`{
  item @_(get:"node"){
    node {
      ...UserResult
    }
  }
}
${resultFragment}
`;

export const updateOfUser = gql`mutation updateUser($input: updateUserInput!){
      item : updateUser (input : $input) {
        node: user {
          ...UserFull
        }
      }
    }
  ${fullFragment}
`;

//getManyReference
export const getManyReferenceOfUser = {

  asTeacher: gql`query AsTeachers_User($skip: Int, $limit: Int, $orderBy: [UserSortOrder], $filter: UserComplexFilter){
    items: users(skip:$skip, limit: $limit, orderBy: $orderBy, filter: $filter) {
      pageInfo{
        count
      }
      edges {
        node {
          ...UserFull
        }
      }
    }
  }
  ${fullFragment}
`,

  asStudent: gql`query AsStudents_User($skip: Int, $limit: Int, $orderBy: [UserSortOrder], $filter: UserComplexFilter){
    items: users(skip:$skip, limit: $limit, orderBy: $orderBy, filter: $filter) {
      pageInfo{
        count
      }
      edges {
        node {
          ...UserFull
        }
      }
    }
  }
  ${fullFragment}
`,
};

export const getManyReferenceOfUserResultOpposite = gql`{
  items: opposite @_(get:"items") {
    items {
      total: pageInfo @_(get:"count") {
        count
      }
      data: edges @_(each:{assign:"node"}) {
        node {
          ...UserResult
        }
      }
    }
  }
}
  ${resultFragment}
`;

export const getManyReferenceOfUserResultRegular = gql`{
  items {
    total: pageInfo @_(get:"count") {
      count
    }
    data: edges @_(each:{assign:"node"}) {
      node {
        ...UserResult
      }
    }
  }
}
  ${resultFragment}
`;

export const getManyReferenceOfUserResult = {

  asTeacher: getManyReferenceOfUserResultRegular,

  asStudent: getManyReferenceOfUserResultRegular,
};
