import gql from 'graphql-tag';
// fragments

const resultFragment = gql`fragment PersonResult on Person{
  id
  spiritualName
  fullName
  dateOfBirth
  ages
  specialNotes

  userId: user @_(get:"id") {
    id
  }
  socialNetworksValues: socialNetworks @_(get:"edges") {
    edges @_(map:"node") {
      node {
        id
      }
    }
  }
  phonesValues: phones @_(get:"edges") {
    edges @_(map:"node") {
      node {
        id
      }
    }
  }
  emailsValues: emails @_(get:"edges") {
    edges @_(map:"node") {
      node {
        id
      }
    }
  }
  asStudentsIds: asStudents @_(get:"edges") {
    edges @_(map:"node") {
      node @_(get:"id") {
        id
      }
    }
  }
  asCuratorId: asCurator @_(get:"id") {
    id
  }
}
`;

const fullFragment = gql`fragment PersonFull on Person{
    id
    spiritualName
    fullName
    dateOfBirth
    ages
    specialNotes
    user{
      id
    }
    socialNetworks{
      edges {
        node {
          id
        }
      }
    }
    phones{
      edges {
        node {
          id
        }
      }
    }
    emails{
      edges {
        node {
          id
        }
      }
    }
    asStudents{
      edges {
        node {
          id
        }
      }
    }
    asCurator{
      id
    }
  }
`;

// getList
export const getListOfPersonResult = gql`query getListOfPersonResult {
  items {
    total: pageInfo @_(get:"count") {
      count
    }
    data: edges @_(each:{assign:"node"}) {
      node {
        ...PersonResult
      }
    }
  }
}
${resultFragment}
`;

export const getListOfPerson = gql`query getListOfPerson($skip: Int, $limit: Int, $orderBy: [PersonSortOrder], $filter: PersonComplexFilter){
  items: people(skip:$skip, limit: $limit, orderBy: $orderBy, filter: $filter) {
    pageInfo{
      count
    }
    edges {
      node {
        ...PersonFull
      }
    }
  }
}
${fullFragment}
`;

//getOne
export const getOneOfPersonResult = gql`{
  item {
    ...PersonResult
  }
}
${resultFragment}
`;

export const getOneOfPerson = gql`query Person($id: ID){
  item: person(id: $id) {
    ...PersonFull
  }
}
${fullFragment}
`;

// getMany
export const getManyOfPersonResult = gql`{
  items @_(get:"edges"){
    edges @_(map: "node")  {
      node {
        ...PersonResult
      }
    }
  }
}
${resultFragment}
`;

export const getManyOfPerson = gql`query People($filter: PersonComplexFilter){
  items: people(filter: $filter) {
    edges {
      node {
        ...PersonFull
      }
    }
  }
}
${fullFragment}
`;

//delete
export const deleteOfPersonResult = gql`{
  item @_(get:"node"){
    node {
      ...PersonResult
    }
  }
}
${resultFragment}
`;

export const deleteOfPerson = gql`mutation deletePerson ($input : deletePersonInput!) {
  item: deletePerson (input: $input) {
    node: person {
      ...PersonFull
    }
  }
}
${fullFragment}
`;

//create
export const createOfPersonResult = gql`{
  item @_(get: "edge.node") {
    edge {
      node {
        ...PersonResult
      }
    }
  }
}
${resultFragment}
`;

export const createOfPerson = gql`mutation createPerson($input: createPersonInput!){
  item : createPerson (input : $input) {
    edge: person {
      node {
        ...PersonFull
      }
    }
  }
}
${fullFragment}
`;

//update
export const updateOfPersonResult = gql`{
  item @_(get:"node"){
    node {
      ...PersonResult
    }
  }
}
${resultFragment}
`;

export const updateOfPerson = gql`mutation updatePerson($input: updatePersonInput!){
      item : updatePerson (input : $input) {
        node: person {
          ...PersonFull
        }
      }
    }
  ${fullFragment}
`;

//getManyReference
export const getManyReferenceOfPerson = {

  user: gql`query User_Id($skip: Int, $limit: Int, $orderBy: [PersonSortOrder], $filter: PersonComplexFilter){
    items: people(skip:$skip, limit: $limit, orderBy: $orderBy, filter: $filter) {
      pageInfo{
        count
      }
      edges {
        node {
          ...PersonFull
        }
      }
    }
  }
  ${fullFragment}
`,

  socialNetworks: gql`query SocialNetworks_Person($skip: Int, $limit: Int, $orderBy: [PersonSortOrder], $filter: PersonComplexFilter){
    items: people(skip:$skip, limit: $limit, orderBy: $orderBy, filter: $filter) {
      pageInfo{
        count
      }
      edges {
        node {
          ...PersonFull
        }
      }
    }
  }
  ${fullFragment}
`,

  phones: gql`query Phones_Person($skip: Int, $limit: Int, $orderBy: [PersonSortOrder], $filter: PersonComplexFilter){
    items: people(skip:$skip, limit: $limit, orderBy: $orderBy, filter: $filter) {
      pageInfo{
        count
      }
      edges {
        node {
          ...PersonFull
        }
      }
    }
  }
  ${fullFragment}
`,

  emails: gql`query Emails_Person($skip: Int, $limit: Int, $orderBy: [PersonSortOrder], $filter: PersonComplexFilter){
    items: people(skip:$skip, limit: $limit, orderBy: $orderBy, filter: $filter) {
      pageInfo{
        count
      }
      edges {
        node {
          ...PersonFull
        }
      }
    }
  }
  ${fullFragment}
`,

  asStudents: gql`query AsStudents_Person($skip: Int, $limit: Int, $orderBy: [PersonSortOrder], $filter: PersonComplexFilter){
    items: people(skip:$skip, limit: $limit, orderBy: $orderBy, filter: $filter) {
      pageInfo{
        count
      }
      edges {
        node {
          ...PersonFull
        }
      }
    }
  }
  ${fullFragment}
`,

  asCurator: gql`query AsCurator_Person($skip: Int, $limit: Int, $orderBy: [PersonSortOrder], $filter: PersonComplexFilter){
    items: people(skip:$skip, limit: $limit, orderBy: $orderBy, filter: $filter) {
      pageInfo{
        count
      }
      edges {
        node {
          ...PersonFull
        }
      }
    }
  }
  ${fullFragment}
`,
};

export const getManyReferenceOfPersonResultOpposite = gql`{
  items: opposite @_(get:"items") {
    items {
      total: pageInfo @_(get:"count") {
        count
      }
      data: edges @_(each:{assign:"node"}) {
        node {
          ...PersonResult
        }
      }
    }
  }
}
  ${resultFragment}
`;

export const getManyReferenceOfPersonResultRegular = gql`{
  items {
    total: pageInfo @_(get:"count") {
      count
    }
    data: edges @_(each:{assign:"node"}) {
      node {
        ...PersonResult
      }
    }
  }
}
  ${resultFragment}
`;

export const getManyReferenceOfPersonResult = {

  user: getManyReferenceOfPersonResultRegular,

  socialNetworks: getManyReferenceOfPersonResultRegular,

  phones: getManyReferenceOfPersonResultRegular,

  emails: getManyReferenceOfPersonResultRegular,

  asStudents: getManyReferenceOfPersonResultRegular,

  asCurator: getManyReferenceOfPersonResultRegular,
};

