import gql from 'graphql-tag';
// fragments

const resultFragment = gql`fragment FollowingResult on Following{
  id
  followers
  followings

}
`;

const fullFragment = gql`fragment FollowingFull on Following{
    id
    followers
    followings
  }
`;

// getList
export const getListOfFollowingResult = gql`query getListOfFollowingResult {
  items {
    total: pageInfo @_(get:"count") {
      count
    }
    data: edges @_(each:{assign:"node"}) {
      node {
        ...FollowingResult
      }
    }
  }
}
${resultFragment}
`;

export const getListOfFollowing = gql`query getListOfFollowing($skip: Int, $limit: Int, $orderBy: [FollowingSortOrder], $filter: FollowingComplexFilter){
  items: followings(skip:$skip, limit: $limit, orderBy: $orderBy, filter: $filter) {
    pageInfo{
      count
    }
    edges {
      node {
        ...FollowingFull
      }
    }
  }
}
${fullFragment}
`;

//getOne
export const getOneOfFollowingResult = gql`{
  item {
    ...FollowingResult
  }
}
${resultFragment}
`;

export const getOneOfFollowing = gql`query Following($id: ID){
  item: following(id: $id) {
    ...FollowingFull
  }
}
${fullFragment}
`;

// getMany
export const getManyOfFollowingResult = gql`{
  items @_(get:"edges"){
    edges @_(map: "node")  {
      node {
        ...FollowingResult
      }
    }
  }
}
${resultFragment}
`;

export const getManyOfFollowing = gql`query Followings($filter: FollowingComplexFilter){
  items: followings(filter: $filter) {
    edges {
      node {
        ...FollowingFull
      }
    }
  }
}
${fullFragment}
`;

//delete
export const deleteOfFollowingResult = gql`{
  item @_(get:"node"){
    node {
      ...FollowingResult
    }
  }
}
${resultFragment}
`;

export const deleteOfFollowing = gql`mutation deleteFollowing ($input : deleteFollowingInput!) {
  item: deleteFollowing (input: $input) {
    node: following {
      ...FollowingFull
    }
  }
}
${fullFragment}
`;

//create
export const createOfFollowingResult = gql`{
  item @_(get: "edge.node") {
    edge {
      node {
        ...FollowingResult
      }
    }
  }
}
${resultFragment}
`;

export const createOfFollowing = gql`mutation createFollowing($input: createFollowingInput!){
  item : createFollowing (input : $input) {
    edge: following {
      node {
        ...FollowingFull
      }
    }
  }
}
${fullFragment}
`;

//update
export const updateOfFollowingResult = gql`{
  item @_(get:"node"){
    node {
      ...FollowingResult
    }
  }
}
${resultFragment}
`;

export const updateOfFollowing = gql`mutation updateFollowing($input: updateFollowingInput!){
      item : updateFollowing (input : $input) {
        node: following {
          ...FollowingFull
        }
      }
    }
  ${fullFragment}
`;

//getManyReference
export const getManyReferenceOfFollowing = {
};

export const getManyReferenceOfFollowingResultOpposite = gql`{
  items: opposite @_(get:"items") {
    items {
      total: pageInfo @_(get:"count") {
        count
      }
      data: edges @_(each:{assign:"node"}) {
        node {
          ...FollowingResult
        }
      }
    }
  }
}
  ${resultFragment}
`;

export const getManyReferenceOfFollowingResultRegular = gql`{
  items {
    total: pageInfo @_(get:"count") {
      count
    }
    data: edges @_(each:{assign:"node"}) {
      node {
        ...FollowingResult
      }
    }
  }
}
  ${resultFragment}
`;

export const getManyReferenceOfFollowingResult = {
};
