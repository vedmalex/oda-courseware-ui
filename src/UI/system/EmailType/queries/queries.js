import gql from 'graphql-tag';
// fragments

const resultFragment = gql`fragment EmailTypeResult on EmailType{
  id
  name

}
`;

const fullFragment = gql`fragment EmailTypeFull on EmailType{
    id
    name
  }
`;

// getList
export const getListOfEmailTypeResult = gql`query getListOfEmailTypeResult {
  items {
    total: pageInfo @_(get:"count") {
      count
    }
    data: edges @_(each:{assign:"node"}) {
      node {
        ...EmailTypeResult
      }
    }
  }
}
${resultFragment}
`;

export const getListOfEmailType = gql`query getListOfEmailType($skip: Int, $limit: Int, $orderBy: [EmailTypeSortOrder], $filter: EmailTypeComplexFilter){
  items: emailTypes(skip:$skip, limit: $limit, orderBy: $orderBy, filter: $filter) {
    pageInfo{
      count
    }
    edges {
      node {
        ...EmailTypeFull
      }
    }
  }
}
${fullFragment}
`;

//getOne
export const getOneOfEmailTypeResult = gql`{
  item {
    ...EmailTypeResult
  }
}
${resultFragment}
`;

export const getOneOfEmailType = gql`query EmailType($id: ID){
  item: emailType(id: $id) {
    ...EmailTypeFull
  }
}
${fullFragment}
`;

// getMany
export const getManyOfEmailTypeResult = gql`{
  items @_(get:"edges"){
    edges @_(map: "node")  {
      node {
        ...EmailTypeResult
      }
    }
  }
}
${resultFragment}
`;

export const getManyOfEmailType = gql`query EmailTypes($filter: EmailTypeComplexFilter){
  items: emailTypes(filter: $filter) {
    edges {
      node {
        ...EmailTypeFull
      }
    }
  }
}
${fullFragment}
`;

//delete
export const deleteOfEmailTypeResult = gql`{
  item @_(get:"node"){
    node {
      ...EmailTypeResult
    }
  }
}
${resultFragment}
`;

export const deleteOfEmailType = gql`mutation deleteEmailType ($input : deleteEmailTypeInput!) {
  item: deleteEmailType (input: $input) {
    node: emailType {
      ...EmailTypeFull
    }
  }
}
${fullFragment}
`;

//create
export const createOfEmailTypeResult = gql`{
  item @_(get: "edge.node") {
    edge {
      node {
        ...EmailTypeResult
      }
    }
  }
}
${resultFragment}
`;

export const createOfEmailType = gql`mutation createEmailType($input: createEmailTypeInput!){
  item : createEmailType (input : $input) {
    edge: emailType {
      node {
        ...EmailTypeFull
      }
    }
  }
}
${fullFragment}
`;

//update
export const updateOfEmailTypeResult = gql`{
  item @_(get:"node"){
    node {
      ...EmailTypeResult
    }
  }
}
${resultFragment}
`;

export const updateOfEmailType = gql`mutation updateEmailType($input: updateEmailTypeInput!){
      item : updateEmailType (input : $input) {
        node: emailType {
          ...EmailTypeFull
        }
      }
    }
  ${fullFragment}
`;

//getManyReference
export const getManyReferenceOfEmailType = {
};

export const getManyReferenceOfEmailTypeResultOpposite = gql`{
  items: opposite @_(get:"items") {
    items {
      total: pageInfo @_(get:"count") {
        count
      }
      data: edges @_(each:{assign:"node"}) {
        node {
          ...EmailTypeResult
        }
      }
    }
  }
}
  ${resultFragment}
`;

export const getManyReferenceOfEmailTypeResultRegular = gql`{
  items {
    total: pageInfo @_(get:"count") {
      count
    }
    data: edges @_(each:{assign:"node"}) {
      node {
        ...EmailTypeResult
      }
    }
  }
}
  ${resultFragment}
`;

export const getManyReferenceOfEmailTypeResult = {
};

