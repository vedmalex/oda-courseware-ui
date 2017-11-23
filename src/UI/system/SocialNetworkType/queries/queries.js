import gql from 'graphql-tag';
// fragments

const resultFragment = gql`fragment SocialNetworkTypeResult on SocialNetworkType{
  id
  name

}
`;

const fullFragment = gql`fragment SocialNetworkTypeFull on SocialNetworkType{
    id
    name
  }
`;

// getList
export const getListOfSocialNetworkTypeResult = gql`query getListOfSocialNetworkTypeResult {
  items {
    total: pageInfo @_(get:"count") {
      count
    }
    data: edges @_(each:{assign:"node"}) {
      node {
        ...SocialNetworkTypeResult
      }
    }
  }
}
${resultFragment}
`;

export const getListOfSocialNetworkType = gql`query getListOfSocialNetworkType($skip: Int, $limit: Int, $orderBy: [SocialNetworkTypeSortOrder], $filter: SocialNetworkTypeComplexFilter){
  items: socialNetworkTypes(skip:$skip, limit: $limit, orderBy: $orderBy, filter: $filter) {
    pageInfo{
      count
    }
    edges {
      node {
        ...SocialNetworkTypeFull
      }
    }
  }
}
${fullFragment}
`;

//getOne
export const getOneOfSocialNetworkTypeResult = gql`{
  item {
    ...SocialNetworkTypeResult
  }
}
${resultFragment}
`;

export const getOneOfSocialNetworkType = gql`query SocialNetworkType($id: ID){
  item: socialNetworkType(id: $id) {
    ...SocialNetworkTypeFull
  }
}
${fullFragment}
`;

// getMany
export const getManyOfSocialNetworkTypeResult = gql`{
  items @_(get:"edges"){
    edges @_(map: "node")  {
      node {
        ...SocialNetworkTypeResult
      }
    }
  }
}
${resultFragment}
`;

export const getManyOfSocialNetworkType = gql`query SocialNetworkTypes($filter: SocialNetworkTypeComplexFilter){
  items: socialNetworkTypes(filter: $filter) {
    edges {
      node {
        ...SocialNetworkTypeFull
      }
    }
  }
}
${fullFragment}
`;

//delete
export const deleteOfSocialNetworkTypeResult = gql`{
  item @_(get:"node"){
    node {
      ...SocialNetworkTypeResult
    }
  }
}
${resultFragment}
`;

export const deleteOfSocialNetworkType = gql`mutation deleteSocialNetworkType ($input : deleteSocialNetworkTypeInput!) {
  item: deleteSocialNetworkType (input: $input) {
    node: socialNetworkType {
      ...SocialNetworkTypeFull
    }
  }
}
${fullFragment}
`;

//create
export const createOfSocialNetworkTypeResult = gql`{
  item @_(get: "edge.node") {
    edge {
      node {
        ...SocialNetworkTypeResult
      }
    }
  }
}
${resultFragment}
`;

export const createOfSocialNetworkType = gql`mutation createSocialNetworkType($input: createSocialNetworkTypeInput!){
  item : createSocialNetworkType (input : $input) {
    edge: socialNetworkType {
      node {
        ...SocialNetworkTypeFull
      }
    }
  }
}
${fullFragment}
`;

//update
export const updateOfSocialNetworkTypeResult = gql`{
  item @_(get:"node"){
    node {
      ...SocialNetworkTypeResult
    }
  }
}
${resultFragment}
`;

export const updateOfSocialNetworkType = gql`mutation updateSocialNetworkType($input: updateSocialNetworkTypeInput!){
      item : updateSocialNetworkType (input : $input) {
        node: socialNetworkType {
          ...SocialNetworkTypeFull
        }
      }
    }
  ${fullFragment}
`;

//getManyReference
export const getManyReferenceOfSocialNetworkType = {
};

export const getManyReferenceOfSocialNetworkTypeResultOpposite = gql`{
  items: opposite @_(get:"items") {
    items {
      total: pageInfo @_(get:"count") {
        count
      }
      data: edges @_(each:{assign:"node"}) {
        node {
          ...SocialNetworkTypeResult
        }
      }
    }
  }
}
  ${resultFragment}
`;

export const getManyReferenceOfSocialNetworkTypeResultRegular = gql`{
  items {
    total: pageInfo @_(get:"count") {
      count
    }
    data: edges @_(each:{assign:"node"}) {
      node {
        ...SocialNetworkTypeResult
      }
    }
  }
}
  ${resultFragment}
`;

export const getManyReferenceOfSocialNetworkTypeResult = {
};

