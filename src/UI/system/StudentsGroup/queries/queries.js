import gql from 'graphql-tag';
// fragments

const resultFragment = gql`fragment StudentsGroupResult on StudentsGroup{
  id
  name

  subjectsValues: subjects @_(get:"edges") {
    edges @_(map:"node") {
      node {
        id
      }
    }
  }
  studentsValues: students @_(get:"edges") {
    edges @_(map:"node") {
      node {
        id
      }
    }
  }
}
`;

const fullFragment = gql`fragment StudentsGroupFull on StudentsGroup{
    id
    name
    subjects{
      edges {
        node {
          id
        }
      }
    }
    students{
      edges {
        node {
          id
        }
      }
    }
  }
`;

// getList
export const getListOfStudentsGroupResult = gql`query getListOfStudentsGroupResult {
  items {
    total: pageInfo @_(get:"count") {
      count
    }
    data: edges @_(each:{assign:"node"}) {
      node {
        ...StudentsGroupResult
      }
    }
  }
}
${resultFragment}
`;

export const getListOfStudentsGroup = gql`query getListOfStudentsGroup($skip: Int, $limit: Int, $orderBy: [StudentsGroupSortOrder], $filter: StudentsGroupComplexFilter){
  items: studentsGroups(skip:$skip, limit: $limit, orderBy: $orderBy, filter: $filter) {
    pageInfo{
      count
    }
    edges {
      node {
        ...StudentsGroupFull
      }
    }
  }
}
${fullFragment}
`;

//getOne
export const getOneOfStudentsGroupResult = gql`{
  item {
    ...StudentsGroupResult
  }
}
${resultFragment}
`;

export const getOneOfStudentsGroup = gql`query StudentsGroup($id: ID){
  item: studentsGroup(id: $id) {
    ...StudentsGroupFull
  }
}
${fullFragment}
`;

// getMany
export const getManyOfStudentsGroupResult = gql`{
  items @_(get:"edges"){
    edges @_(map: "node")  {
      node {
        ...StudentsGroupResult
      }
    }
  }
}
${resultFragment}
`;

export const getManyOfStudentsGroup = gql`query StudentsGroups($filter: StudentsGroupComplexFilter){
  items: studentsGroups(filter: $filter) {
    edges {
      node {
        ...StudentsGroupFull
      }
    }
  }
}
${fullFragment}
`;

//delete
export const deleteOfStudentsGroupResult = gql`{
  item @_(get:"node"){
    node {
      ...StudentsGroupResult
    }
  }
}
${resultFragment}
`;

export const deleteOfStudentsGroup = gql`mutation deleteStudentsGroup ($input : deleteStudentsGroupInput!) {
  item: deleteStudentsGroup (input: $input) {
    node: studentsGroup {
      ...StudentsGroupFull
    }
  }
}
${fullFragment}
`;

//create
export const createOfStudentsGroupResult = gql`{
  item @_(get: "edge.node") {
    edge {
      node {
        ...StudentsGroupResult
      }
    }
  }
}
${resultFragment}
`;

export const createOfStudentsGroup = gql`mutation createStudentsGroup($input: createStudentsGroupInput!){
  item : createStudentsGroup (input : $input) {
    edge: studentsGroup {
      node {
        ...StudentsGroupFull
      }
    }
  }
}
${fullFragment}
`;

//update
export const updateOfStudentsGroupResult = gql`{
  item @_(get:"node"){
    node {
      ...StudentsGroupResult
    }
  }
}
${resultFragment}
`;

export const updateOfStudentsGroup = gql`mutation updateStudentsGroup($input: updateStudentsGroupInput!){
      item : updateStudentsGroup (input : $input) {
        node: studentsGroup {
          ...StudentsGroupFull
        }
      }
    }
  ${fullFragment}
`;

//getManyReference
export const getManyReferenceOfStudentsGroup = {
  subjects: gql`query Subjects_Id($id: ID, $skip: Int, $limit: Int, $orderBy: [StudentsGroupSortOrder], $filter: StudentsGroupComplexFilter){
    opposite: subject(id:$id){
      id
      items: groups(skip:$skip, limit: $limit, orderBy: $orderBy, filter: $filter) {
        pageInfo{
          count
        }
        edges {
          node {
            ...StudentsGroupFull
          }
        }
      }
    }
  }
  ${fullFragment}
`,

  students: gql`query Students_Group($skip: Int, $limit: Int, $orderBy: [StudentsGroupSortOrder], $filter: StudentsGroupComplexFilter){
    items: studentsGroups(skip:$skip, limit: $limit, orderBy: $orderBy, filter: $filter) {
      pageInfo{
        count
      }
      edges {
        node {
          ...StudentsGroupFull
        }
      }
    }
  }
  ${fullFragment}
`,
};

export const getManyReferenceOfStudentsGroupResultOpposite = gql`{
  items: opposite @_(get:"items") {
    items {
      total: pageInfo @_(get:"count") {
        count
      }
      data: edges @_(each:{assign:"node"}) {
        node {
          ...StudentsGroupResult
        }
      }
    }
  }
}
  ${resultFragment}
`;

export const getManyReferenceOfStudentsGroupResultRegular = gql`{
  items {
    total: pageInfo @_(get:"count") {
      count
    }
    data: edges @_(each:{assign:"node"}) {
      node {
        ...StudentsGroupResult
      }
    }
  }
}
  ${resultFragment}
`;

export const getManyReferenceOfStudentsGroupResult = {
  subjects: getManyReferenceOfStudentsGroupResultOpposite,

  students: getManyReferenceOfStudentsGroupResultRegular,
};
