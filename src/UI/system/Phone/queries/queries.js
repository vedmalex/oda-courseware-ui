import gql from 'graphql-tag';
// fragments

const resultFragment = gql`fragment PhoneResult on Phone{
  id
  phoneNumber

  typeId: type @_(get:"id") {
    id
  }
  personId: person @_(get:"id") {
    id
  }
}
`;

const fullFragment = gql`fragment PhoneFull on Phone{
    id
    phoneNumber
    type{
      id
    }
    person{
      id
    }
  }
`;

// getList
export const getListOfPhoneResult = gql`query getListOfPhoneResult {
  items {
    total: pageInfo @_(get:"count") {
      count
    }
    data: edges @_(each:{assign:"node"}) {
      node {
        ...PhoneResult
      }
    }
  }
}
${resultFragment}
`;

export const getListOfPhone = gql`query getListOfPhone($skip: Int, $limit: Int, $orderBy: [PhoneSortOrder], $filter: PhoneComplexFilter){
  items: phones(skip:$skip, limit: $limit, orderBy: $orderBy, filter: $filter) {
    pageInfo{
      count
    }
    edges {
      node {
        ...PhoneFull
      }
    }
  }
}
${fullFragment}
`;

//getOne
export const getOneOfPhoneResult = gql`{
  item {
    ...PhoneResult
  }
}
${resultFragment}
`;

export const getOneOfPhone = gql`query Phone($id: ID){
  item: phone(id: $id) {
    ...PhoneFull
  }
}
${fullFragment}
`;

// getMany
export const getManyOfPhoneResult = gql`{
  items @_(get:"edges"){
    edges @_(map: "node")  {
      node {
        ...PhoneResult
      }
    }
  }
}
${resultFragment}
`;

export const getManyOfPhone = gql`query Phones($filter: PhoneComplexFilter){
  items: phones(filter: $filter) {
    edges {
      node {
        ...PhoneFull
      }
    }
  }
}
${fullFragment}
`;

//delete
export const deleteOfPhoneResult = gql`{
  item @_(get:"node"){
    node {
      ...PhoneResult
    }
  }
}
${resultFragment}
`;

export const deleteOfPhone = gql`mutation deletePhone ($input : deletePhoneInput!) {
  item: deletePhone (input: $input) {
    node: phone {
      ...PhoneFull
    }
  }
}
${fullFragment}
`;

//create
export const createOfPhoneResult = gql`{
  item @_(get: "edge.node") {
    edge {
      node {
        ...PhoneResult
      }
    }
  }
}
${resultFragment}
`;

export const createOfPhone = gql`mutation createPhone($input: createPhoneInput!){
  item : createPhone (input : $input) {
    edge: phone {
      node {
        ...PhoneFull
      }
    }
  }
}
${fullFragment}
`;

//update
export const updateOfPhoneResult = gql`{
  item @_(get:"node"){
    node {
      ...PhoneResult
    }
  }
}
${resultFragment}
`;

export const updateOfPhone = gql`mutation updatePhone($input: updatePhoneInput!){
      item : updatePhone (input : $input) {
        node: phone {
          ...PhoneFull
        }
      }
    }
  ${fullFragment}
`;

//getManyReference
export const getManyReferenceOfPhone = {

  type: gql`query Type_Name($skip: Int, $limit: Int, $orderBy: [PhoneSortOrder], $filter: PhoneComplexFilter){
    items: phones(skip:$skip, limit: $limit, orderBy: $orderBy, filter: $filter) {
      pageInfo{
        count
      }
      edges {
        node {
          ...PhoneFull
        }
      }
    }
  }
  ${fullFragment}
`,

  person: gql`query Person_Id($skip: Int, $limit: Int, $orderBy: [PhoneSortOrder], $filter: PhoneComplexFilter){
    items: phones(skip:$skip, limit: $limit, orderBy: $orderBy, filter: $filter) {
      pageInfo{
        count
      }
      edges {
        node {
          ...PhoneFull
        }
      }
    }
  }
  ${fullFragment}
`,
};

export const getManyReferenceOfPhoneResultOpposite = gql`{
  items: opposite @_(get:"items") {
    items {
      total: pageInfo @_(get:"count") {
        count
      }
      data: edges @_(each:{assign:"node"}) {
        node {
          ...PhoneResult
        }
      }
    }
  }
}
  ${resultFragment}
`;

export const getManyReferenceOfPhoneResultRegular = gql`{
  items {
    total: pageInfo @_(get:"count") {
      count
    }
    data: edges @_(each:{assign:"node"}) {
      node {
        ...PhoneResult
      }
    }
  }
}
  ${resultFragment}
`;

export const getManyReferenceOfPhoneResult = {

  type: getManyReferenceOfPhoneResultRegular,

  person: getManyReferenceOfPhoneResultRegular,
};

