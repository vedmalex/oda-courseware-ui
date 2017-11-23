import gql from 'graphql-tag';
// fragments

const resultFragment = gql`fragment PhoneTypeResult on PhoneType{
  id
  name

}
`;

const fullFragment = gql`fragment PhoneTypeFull on PhoneType{
    id
    name
  }
`;

// getList
export const getListOfPhoneTypeResult = gql`query getListOfPhoneTypeResult {
  items {
    total: pageInfo @_(get:"count") {
      count
    }
    data: edges @_(each:{assign:"node"}) {
      node {
        ...PhoneTypeResult
      }
    }
  }
}
${resultFragment}
`;

export const getListOfPhoneType = gql`query getListOfPhoneType($skip: Int, $limit: Int, $orderBy: [PhoneTypeSortOrder], $filter: PhoneTypeComplexFilter){
  items: phoneTypes(skip:$skip, limit: $limit, orderBy: $orderBy, filter: $filter) {
    pageInfo{
      count
    }
    edges {
      node {
        ...PhoneTypeFull
      }
    }
  }
}
${fullFragment}
`;

//getOne
export const getOneOfPhoneTypeResult = gql`{
  item {
    ...PhoneTypeResult
  }
}
${resultFragment}
`;

export const getOneOfPhoneType = gql`query PhoneType($id: ID){
  item: phoneType(id: $id) {
    ...PhoneTypeFull
  }
}
${fullFragment}
`;

// getMany
export const getManyOfPhoneTypeResult = gql`{
  items @_(get:"edges"){
    edges @_(map: "node")  {
      node {
        ...PhoneTypeResult
      }
    }
  }
}
${resultFragment}
`;

export const getManyOfPhoneType = gql`query PhoneTypes($filter: PhoneTypeComplexFilter){
  items: phoneTypes(filter: $filter) {
    edges {
      node {
        ...PhoneTypeFull
      }
    }
  }
}
${fullFragment}
`;

//delete
export const deleteOfPhoneTypeResult = gql`{
  item @_(get:"node"){
    node {
      ...PhoneTypeResult
    }
  }
}
${resultFragment}
`;

export const deleteOfPhoneType = gql`mutation deletePhoneType ($input : deletePhoneTypeInput!) {
  item: deletePhoneType (input: $input) {
    node: phoneType {
      ...PhoneTypeFull
    }
  }
}
${fullFragment}
`;

//create
export const createOfPhoneTypeResult = gql`{
  item @_(get: "edge.node") {
    edge {
      node {
        ...PhoneTypeResult
      }
    }
  }
}
${resultFragment}
`;

export const createOfPhoneType = gql`mutation createPhoneType($input: createPhoneTypeInput!){
  item : createPhoneType (input : $input) {
    edge: phoneType {
      node {
        ...PhoneTypeFull
      }
    }
  }
}
${fullFragment}
`;

//update
export const updateOfPhoneTypeResult = gql`{
  item @_(get:"node"){
    node {
      ...PhoneTypeResult
    }
  }
}
${resultFragment}
`;

export const updateOfPhoneType = gql`mutation updatePhoneType($input: updatePhoneTypeInput!){
      item : updatePhoneType (input : $input) {
        node: phoneType {
          ...PhoneTypeFull
        }
      }
    }
  ${fullFragment}
`;

//getManyReference
export const getManyReferenceOfPhoneType = {
};

export const getManyReferenceOfPhoneTypeResultOpposite = gql`{
  items: opposite @_(get:"items") {
    items {
      total: pageInfo @_(get:"count") {
        count
      }
      data: edges @_(each:{assign:"node"}) {
        node {
          ...PhoneTypeResult
        }
      }
    }
  }
}
  ${resultFragment}
`;

export const getManyReferenceOfPhoneTypeResultRegular = gql`{
  items {
    total: pageInfo @_(get:"count") {
      count
    }
    data: edges @_(each:{assign:"node"}) {
      node {
        ...PhoneTypeResult
      }
    }
  }
}
  ${resultFragment}
`;

export const getManyReferenceOfPhoneTypeResult = {
};

