import gql from 'graphql-tag';
// fragments

const resultFragment = gql`fragment SocialNetworkResult on SocialNetwork{
  id
  account
  url

  typeId: type @_(get:"id") {
    id
  }
  personId: person @_(get:"id") {
    id
  }
}
`;

const fullFragment = gql`fragment SocialNetworkFull on SocialNetwork{
    id
    account
    url
    type{
      id
    }
    person{
      id
    }
  }
`;

// getList
export const getListOfSocialNetworkResult = gql`query getListOfSocialNetworkResult {
  items {
    total: pageInfo @_(get:"count") {
      count
    }
    data: edges @_(each:{assign:"node"}) {
      node {
        ...SocialNetworkResult
      }
    }
  }
}
${resultFragment}
`;

export const getListOfSocialNetwork = gql`query getListOfSocialNetwork($skip: Int, $limit: Int, $orderBy: [SocialNetworkSortOrder], $filter: SocialNetworkComplexFilter){
  items: socialNetworks(skip:$skip, limit: $limit, orderBy: $orderBy, filter: $filter) {
    pageInfo{
      count
    }
    edges {
      node {
        ...SocialNetworkFull
      }
    }
  }
}
${fullFragment}
`;

//getOne
export const getOneOfSocialNetworkResult = gql`{
  item {
    ...SocialNetworkResult
  }
}
${resultFragment}
`;

export const getOneOfSocialNetwork = gql`query SocialNetwork($id: ID){
  item: socialNetwork(id: $id) {
    ...SocialNetworkFull
  }
}
${fullFragment}
`;

// getMany
export const getManyOfSocialNetworkResult = gql`{
  items @_(get:"edges"){
    edges @_(map: "node")  {
      node {
        ...SocialNetworkResult
      }
    }
  }
}
${resultFragment}
`;

export const getManyOfSocialNetwork = gql`query SocialNetworks($filter: SocialNetworkComplexFilter){
  items: socialNetworks(filter: $filter) {
    edges {
      node {
        ...SocialNetworkFull
      }
    }
  }
}
${fullFragment}
`;

//delete
export const deleteOfSocialNetworkResult = gql`{
  item @_(get:"node"){
    node {
      ...SocialNetworkResult
    }
  }
}
${resultFragment}
`;

export const deleteOfSocialNetwork = gql`mutation deleteSocialNetwork ($input : deleteSocialNetworkInput!) {
  item: deleteSocialNetwork (input: $input) {
    node: socialNetwork {
      ...SocialNetworkFull
    }
  }
}
${fullFragment}
`;

//create
export const createOfSocialNetworkResult = gql`{
  item @_(get: "edge.node") {
    edge {
      node {
        ...SocialNetworkResult
      }
    }
  }
}
${resultFragment}
`;

export const createOfSocialNetwork = gql`mutation createSocialNetwork($input: createSocialNetworkInput!){
  item : createSocialNetwork (input : $input) {
    edge: socialNetwork {
      node {
        ...SocialNetworkFull
      }
    }
  }
}
${fullFragment}
`;

//update
export const updateOfSocialNetworkResult = gql`{
  item @_(get:"node"){
    node {
      ...SocialNetworkResult
    }
  }
}
${resultFragment}
`;

export const updateOfSocialNetwork = gql`mutation updateSocialNetwork($input: updateSocialNetworkInput!){
      item : updateSocialNetwork (input : $input) {
        node: socialNetwork {
          ...SocialNetworkFull
        }
      }
    }
  ${fullFragment}
`;

//getManyReference
export const getManyReferenceOfSocialNetwork = {

  type: gql`query Type_Name($skip: Int, $limit: Int, $orderBy: [SocialNetworkSortOrder], $filter: SocialNetworkComplexFilter){
    items: socialNetworks(skip:$skip, limit: $limit, orderBy: $orderBy, filter: $filter) {
      pageInfo{
        count
      }
      edges {
        node {
          ...SocialNetworkFull
        }
      }
    }
  }
  ${fullFragment}
`,

  person: gql`query Person_Id($skip: Int, $limit: Int, $orderBy: [SocialNetworkSortOrder], $filter: SocialNetworkComplexFilter){
    items: socialNetworks(skip:$skip, limit: $limit, orderBy: $orderBy, filter: $filter) {
      pageInfo{
        count
      }
      edges {
        node {
          ...SocialNetworkFull
        }
      }
    }
  }
  ${fullFragment}
`,
};

export const getManyReferenceOfSocialNetworkResultOpposite = gql`{
  items: opposite @_(get:"items") {
    items {
      total: pageInfo @_(get:"count") {
        count
      }
      data: edges @_(each:{assign:"node"}) {
        node {
          ...SocialNetworkResult
        }
      }
    }
  }
}
  ${resultFragment}
`;

export const getManyReferenceOfSocialNetworkResultRegular = gql`{
  items {
    total: pageInfo @_(get:"count") {
      count
    }
    data: edges @_(each:{assign:"node"}) {
      node {
        ...SocialNetworkResult
      }
    }
  }
}
  ${resultFragment}
`;

export const getManyReferenceOfSocialNetworkResult = {

  type: getManyReferenceOfSocialNetworkResultRegular,

  person: getManyReferenceOfSocialNetworkResultRegular,
};

