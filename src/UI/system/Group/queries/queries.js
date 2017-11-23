import gql from 'graphql-tag';
// fragments

const resultFragment = gql`fragment GroupResult on Group{
  id
  name

  studentsIds: students @_(get:"edges") {
    edges @_(map:"node") {
      node @_(get:"id") {
        id
      }
    }
  }
  curatorId: curator @_(get:"id") {
    id
  }
}
`;

const fullFragment = gql`fragment GroupFull on Group{
    id
    name
    students{
      edges {
        node {
          id
        }
      }
    }
    curator{
      id
    }
  }
`;

// getList
export const getListOfGroupResult = gql`query getListOfGroupResult {
  items {
    total: pageInfo @_(get:"count") {
      count
    }
    data: edges @_(each:{assign:"node"}) {
      node {
        ...GroupResult
      }
    }
  }
}
${resultFragment}
`;

export const getListOfGroup = gql`query getListOfGroup($skip: Int, $limit: Int, $orderBy: [GroupSortOrder], $filter: GroupComplexFilter){
  items: groups(skip:$skip, limit: $limit, orderBy: $orderBy, filter: $filter) {
    pageInfo{
      count
    }
    edges {
      node {
        ...GroupFull
      }
    }
  }
}
${fullFragment}
`;

//getOne
export const getOneOfGroupResult = gql`{
  item {
    ...GroupResult
  }
}
${resultFragment}
`;

export const getOneOfGroup = gql`query Group($id: ID){
  item: group(id: $id) {
    ...GroupFull
  }
}
${fullFragment}
`;

// getMany
export const getManyOfGroupResult = gql`{
  items @_(get:"edges"){
    edges @_(map: "node")  {
      node {
        ...GroupResult
      }
    }
  }
}
${resultFragment}
`;

export const getManyOfGroup = gql`query Groups($filter: GroupComplexFilter){
  items: groups(filter: $filter) {
    edges {
      node {
        ...GroupFull
      }
    }
  }
}
${fullFragment}
`;

//delete
export const deleteOfGroupResult = gql`{
  item @_(get:"node"){
    node {
      ...GroupResult
    }
  }
}
${resultFragment}
`;

export const deleteOfGroup = gql`mutation deleteGroup ($input : deleteGroupInput!) {
  item: deleteGroup (input: $input) {
    node: group {
      ...GroupFull
    }
  }
}
${fullFragment}
`;

//create
export const createOfGroupResult = gql`{
  item @_(get: "edge.node") {
    edge {
      node {
        ...GroupResult
      }
    }
  }
}
${resultFragment}
`;

export const createOfGroup = gql`mutation createGroup($input: createGroupInput!){
  item : createGroup (input : $input) {
    edge: group {
      node {
        ...GroupFull
      }
    }
  }
}
${fullFragment}
`;

//update
export const updateOfGroupResult = gql`{
  item @_(get:"node"){
    node {
      ...GroupResult
    }
  }
}
${resultFragment}
`;

export const updateOfGroup = gql`mutation updateGroup($input: updateGroupInput!){
      item : updateGroup (input : $input) {
        node: group {
          ...GroupFull
        }
      }
    }
  ${fullFragment}
`;

//getManyReference
export const getManyReferenceOfGroup = {

  students: gql`query Students_Group($skip: Int, $limit: Int, $orderBy: [GroupSortOrder], $filter: GroupComplexFilter){
    items: groups(skip:$skip, limit: $limit, orderBy: $orderBy, filter: $filter) {
      pageInfo{
        count
      }
      edges {
        node {
          ...GroupFull
        }
      }
    }
  }
  ${fullFragment}
`,

  curator: gql`query Curator_Id($skip: Int, $limit: Int, $orderBy: [GroupSortOrder], $filter: GroupComplexFilter){
    items: groups(skip:$skip, limit: $limit, orderBy: $orderBy, filter: $filter) {
      pageInfo{
        count
      }
      edges {
        node {
          ...GroupFull
        }
      }
    }
  }
  ${fullFragment}
`,
};

export const getManyReferenceOfGroupResultOpposite = gql`{
  items: opposite @_(get:"items") {
    items {
      total: pageInfo @_(get:"count") {
        count
      }
      data: edges @_(each:{assign:"node"}) {
        node {
          ...GroupResult
        }
      }
    }
  }
}
  ${resultFragment}
`;

export const getManyReferenceOfGroupResultRegular = gql`{
  items {
    total: pageInfo @_(get:"count") {
      count
    }
    data: edges @_(each:{assign:"node"}) {
      node {
        ...GroupResult
      }
    }
  }
}
  ${resultFragment}
`;

export const getManyReferenceOfGroupResult = {

  students: getManyReferenceOfGroupResultRegular,

  curator: getManyReferenceOfGroupResultRegular,
};

