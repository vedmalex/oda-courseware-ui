import gql from 'graphql-tag';
// fragments

const resultFragment = gql`fragment CuratorResult on Curator{
  id

  personId: person @_(get:"id") {
    id
  }
  groupsIds: groups @_(get:"edges") {
    edges @_(map:"node") {
      node @_(get:"id") {
        id
      }
    }
  }
}
`;

const fullFragment = gql`fragment CuratorFull on Curator{
    id
    person{
      id
    }
    groups{
      edges {
        node {
          id
        }
      }
    }
  }
`;

// getList
export const getListOfCuratorResult = gql`query getListOfCuratorResult {
  items {
    total: pageInfo @_(get:"count") {
      count
    }
    data: edges @_(each:{assign:"node"}) {
      node {
        ...CuratorResult
      }
    }
  }
}
${resultFragment}
`;

export const getListOfCurator = gql`query getListOfCurator($skip: Int, $limit: Int, $orderBy: [CuratorSortOrder], $filter: CuratorComplexFilter){
  items: curators(skip:$skip, limit: $limit, orderBy: $orderBy, filter: $filter) {
    pageInfo{
      count
    }
    edges {
      node {
        ...CuratorFull
      }
    }
  }
}
${fullFragment}
`;

//getOne
export const getOneOfCuratorResult = gql`{
  item {
    ...CuratorResult
  }
}
${resultFragment}
`;

export const getOneOfCurator = gql`query Curator($id: ID){
  item: curator(id: $id) {
    ...CuratorFull
  }
}
${fullFragment}
`;

// getMany
export const getManyOfCuratorResult = gql`{
  items @_(get:"edges"){
    edges @_(map: "node")  {
      node {
        ...CuratorResult
      }
    }
  }
}
${resultFragment}
`;

export const getManyOfCurator = gql`query Curators($filter: CuratorComplexFilter){
  items: curators(filter: $filter) {
    edges {
      node {
        ...CuratorFull
      }
    }
  }
}
${fullFragment}
`;

//delete
export const deleteOfCuratorResult = gql`{
  item @_(get:"node"){
    node {
      ...CuratorResult
    }
  }
}
${resultFragment}
`;

export const deleteOfCurator = gql`mutation deleteCurator ($input : deleteCuratorInput!) {
  item: deleteCurator (input: $input) {
    node: curator {
      ...CuratorFull
    }
  }
}
${fullFragment}
`;

//create
export const createOfCuratorResult = gql`{
  item @_(get: "edge.node") {
    edge {
      node {
        ...CuratorResult
      }
    }
  }
}
${resultFragment}
`;

export const createOfCurator = gql`mutation createCurator($input: createCuratorInput!){
  item : createCurator (input : $input) {
    edge: curator {
      node {
        ...CuratorFull
      }
    }
  }
}
${fullFragment}
`;

//update
export const updateOfCuratorResult = gql`{
  item @_(get:"node"){
    node {
      ...CuratorResult
    }
  }
}
${resultFragment}
`;

export const updateOfCurator = gql`mutation updateCurator($input: updateCuratorInput!){
      item : updateCurator (input : $input) {
        node: curator {
          ...CuratorFull
        }
      }
    }
  ${fullFragment}
`;

//getManyReference
export const getManyReferenceOfCurator = {

  person: gql`query Person_Id($skip: Int, $limit: Int, $orderBy: [CuratorSortOrder], $filter: CuratorComplexFilter){
    items: curators(skip:$skip, limit: $limit, orderBy: $orderBy, filter: $filter) {
      pageInfo{
        count
      }
      edges {
        node {
          ...CuratorFull
        }
      }
    }
  }
  ${fullFragment}
`,

  groups: gql`query Groups_Curator($skip: Int, $limit: Int, $orderBy: [CuratorSortOrder], $filter: CuratorComplexFilter){
    items: curators(skip:$skip, limit: $limit, orderBy: $orderBy, filter: $filter) {
      pageInfo{
        count
      }
      edges {
        node {
          ...CuratorFull
        }
      }
    }
  }
  ${fullFragment}
`,
};

export const getManyReferenceOfCuratorResultOpposite = gql`{
  items: opposite @_(get:"items") {
    items {
      total: pageInfo @_(get:"count") {
        count
      }
      data: edges @_(each:{assign:"node"}) {
        node {
          ...CuratorResult
        }
      }
    }
  }
}
  ${resultFragment}
`;

export const getManyReferenceOfCuratorResultRegular = gql`{
  items {
    total: pageInfo @_(get:"count") {
      count
    }
    data: edges @_(each:{assign:"node"}) {
      node {
        ...CuratorResult
      }
    }
  }
}
  ${resultFragment}
`;

export const getManyReferenceOfCuratorResult = {

  person: getManyReferenceOfCuratorResultRegular,

  groups: getManyReferenceOfCuratorResultRegular,
};

