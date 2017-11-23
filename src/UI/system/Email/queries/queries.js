import gql from 'graphql-tag';
// fragments

const resultFragment = gql`fragment EmailResult on Email{
  id
  email

  typeId: type @_(get:"id") {
    id
  }
  personId: person @_(get:"id") {
    id
  }
}
`;

const fullFragment = gql`fragment EmailFull on Email{
    id
    email
    type{
      id
    }
    person{
      id
    }
  }
`;

// getList
export const getListOfEmailResult = gql`query getListOfEmailResult {
  items {
    total: pageInfo @_(get:"count") {
      count
    }
    data: edges @_(each:{assign:"node"}) {
      node {
        ...EmailResult
      }
    }
  }
}
${resultFragment}
`;

export const getListOfEmail = gql`query getListOfEmail($skip: Int, $limit: Int, $orderBy: [EmailSortOrder], $filter: EmailComplexFilter){
  items: emails(skip:$skip, limit: $limit, orderBy: $orderBy, filter: $filter) {
    pageInfo{
      count
    }
    edges {
      node {
        ...EmailFull
      }
    }
  }
}
${fullFragment}
`;

//getOne
export const getOneOfEmailResult = gql`{
  item {
    ...EmailResult
  }
}
${resultFragment}
`;

export const getOneOfEmail = gql`query Email($id: ID){
  item: email(id: $id) {
    ...EmailFull
  }
}
${fullFragment}
`;

// getMany
export const getManyOfEmailResult = gql`{
  items @_(get:"edges"){
    edges @_(map: "node")  {
      node {
        ...EmailResult
      }
    }
  }
}
${resultFragment}
`;

export const getManyOfEmail = gql`query Emails($filter: EmailComplexFilter){
  items: emails(filter: $filter) {
    edges {
      node {
        ...EmailFull
      }
    }
  }
}
${fullFragment}
`;

//delete
export const deleteOfEmailResult = gql`{
  item @_(get:"node"){
    node {
      ...EmailResult
    }
  }
}
${resultFragment}
`;

export const deleteOfEmail = gql`mutation deleteEmail ($input : deleteEmailInput!) {
  item: deleteEmail (input: $input) {
    node: email {
      ...EmailFull
    }
  }
}
${fullFragment}
`;

//create
export const createOfEmailResult = gql`{
  item @_(get: "edge.node") {
    edge {
      node {
        ...EmailResult
      }
    }
  }
}
${resultFragment}
`;

export const createOfEmail = gql`mutation createEmail($input: createEmailInput!){
  item : createEmail (input : $input) {
    edge: email {
      node {
        ...EmailFull
      }
    }
  }
}
${fullFragment}
`;

//update
export const updateOfEmailResult = gql`{
  item @_(get:"node"){
    node {
      ...EmailResult
    }
  }
}
${resultFragment}
`;

export const updateOfEmail = gql`mutation updateEmail($input: updateEmailInput!){
      item : updateEmail (input : $input) {
        node: email {
          ...EmailFull
        }
      }
    }
  ${fullFragment}
`;

//getManyReference
export const getManyReferenceOfEmail = {

  type: gql`query Type_Name($skip: Int, $limit: Int, $orderBy: [EmailSortOrder], $filter: EmailComplexFilter){
    items: emails(skip:$skip, limit: $limit, orderBy: $orderBy, filter: $filter) {
      pageInfo{
        count
      }
      edges {
        node {
          ...EmailFull
        }
      }
    }
  }
  ${fullFragment}
`,

  person: gql`query Person_Id($skip: Int, $limit: Int, $orderBy: [EmailSortOrder], $filter: EmailComplexFilter){
    items: emails(skip:$skip, limit: $limit, orderBy: $orderBy, filter: $filter) {
      pageInfo{
        count
      }
      edges {
        node {
          ...EmailFull
        }
      }
    }
  }
  ${fullFragment}
`,
};

export const getManyReferenceOfEmailResultOpposite = gql`{
  items: opposite @_(get:"items") {
    items {
      total: pageInfo @_(get:"count") {
        count
      }
      data: edges @_(each:{assign:"node"}) {
        node {
          ...EmailResult
        }
      }
    }
  }
}
  ${resultFragment}
`;

export const getManyReferenceOfEmailResultRegular = gql`{
  items {
    total: pageInfo @_(get:"count") {
      count
    }
    data: edges @_(each:{assign:"node"}) {
      node {
        ...EmailResult
      }
    }
  }
}
  ${resultFragment}
`;

export const getManyReferenceOfEmailResult = {

  type: getManyReferenceOfEmailResultRegular,

  person: getManyReferenceOfEmailResultRegular,
};

