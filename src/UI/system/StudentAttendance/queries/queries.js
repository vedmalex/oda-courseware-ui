import gql from 'graphql-tag';
// fragments

export const fragments = {
  resultFragment: gql`fragment StudentAttendanceResult on StudentAttendance {
    id
    meeting
    present
    specialNotes
    student

    meetingLinkId: meetingLink @_(get:"id") {
      id
    }
    studentLinkId: studentLink @_(get:"id") {
      id
    }
  }`,
  fullFragment: gql`fragment StudentAttendanceFull on StudentAttendance {
    id
    meeting
    present
    specialNotes
    student
    meetingLink {
      id
    }
    studentLink {
      id
    }
  }`,
}

export const queries = {
  // getList
  getListResult: ({ resultFragment }) => gql`query getListOfStudentAttendanceResult {
    items {
      total: pageInfo @_(get:"count") {
        count
      }
      data: edges @_(each: {assign:"node"}) {
        node {
          ...StudentAttendanceResult
        }
      }
    }
  }
  ${resultFragment}
  `,
  getList: ({ fullFragment }) => gql`query getListOfStudentAttendance($skip: Int, $limit: Int, $orderBy: [StudentAttendanceSortOrder], $filter: StudentAttendanceComplexFilter) {
    items: studentAttendances(skip:$skip, limit: $limit, orderBy: $orderBy, filter: $filter) {
      pageInfo {
        count
      }
      edges {
        node {
          ...StudentAttendanceFull
        }
      }
    }
  }
  ${fullFragment}
  `,
  //getOne
  getOneResult: ({ resultFragment }) => gql`{
    item {
      ...StudentAttendanceResult
    }
  }
  ${resultFragment}
  `,
  getOne: ({ fullFragment }) => gql`query StudentAttendance($id: ID) {
    item: studentAttendance(id: $id) {
      ...StudentAttendanceFull
    }
  }
  ${fullFragment}
  `,
  // getMany
  getManyResult: ({ resultFragment }) => gql`{
    items @_(get:"edges") {
      edges @_(map: "node")  {
        node {
          ...StudentAttendanceResult
        }
      }
    }
  }
  ${resultFragment}
  `,
  getMany: ({ fullFragment }) => gql`query StudentAttendances($filter: StudentAttendanceComplexFilter) {
    items: studentAttendances(filter: $filter) {
      edges {
        node {
          ...StudentAttendanceFull
        }
      }
    }
  }
  ${fullFragment}
  `,
  //delete
  deleteResult: ({ resultFragment }) => gql`{
    item @_(get:"node") {
      node {
        ...StudentAttendanceResult
      }
    }
  }
  ${resultFragment}
  `,
  delete: ({ fullFragment }) => gql`mutation deleteStudentAttendance ($input : deleteStudentAttendanceInput!) {
    item: deleteStudentAttendance (input: $input) {
      node: studentAttendance {
        ...StudentAttendanceFull
      }
    }
  }
  ${fullFragment}
  `,
  //create
  createResult: ({ resultFragment }) => gql`{
    item @_(get: "edge.node") {
      edge {
        node {
          ...StudentAttendanceResult
        }
      }
    }
  }
  ${resultFragment}
  `,
  create: ({ fullFragment }) => gql`mutation createStudentAttendance($input: createStudentAttendanceInput!) {
    item : createStudentAttendance (input : $input) {
      edge: studentAttendance {
        node {
          ...StudentAttendanceFull
        }
      }
    }
  }
  ${fullFragment}
  `,
  //update
  updateResult: ({ resultFragment }) => gql`{
    item @_(get:"node") {
      node {
        ...StudentAttendanceResult
      }
    }
  }
  ${resultFragment}
  `,
  update: ({ fullFragment }) => gql`mutation updateStudentAttendance($input: updateStudentAttendanceInput!) {
        item : updateStudentAttendance (input : $input) {
          node: studentAttendance {
            ...StudentAttendanceFull
          }
        }
      }
    ${fullFragment}
  `,
  //getManyReference
  getManyReference: ({ fullFragment }) => ({
  
    meetingLink: gql`query MeetingLink_Id($skip: Int, $limit: Int, $orderBy: [StudentAttendanceSortOrder], $filter: StudentAttendanceComplexFilter) {
      items: studentAttendances(skip:$skip, limit: $limit, orderBy: $orderBy, filter: $filter) {
        pageInfo {
          count
        }
        edges {
          node {
            ...StudentAttendanceFull
          }
        }
      }
    }
    ${fullFragment}
  `,
  
    studentLink: gql`query StudentLink_Id($skip: Int, $limit: Int, $orderBy: [StudentAttendanceSortOrder], $filter: StudentAttendanceComplexFilter) {
      items: studentAttendances(skip:$skip, limit: $limit, orderBy: $orderBy, filter: $filter) {
        pageInfo {
          count
        }
        edges {
          node {
            ...StudentAttendanceFull
          }
        }
      }
    }
    ${fullFragment}
  `,
    }),
  getManyReferenceResultOpposite: ({ resultFragment }) => gql`{
    items: opposite @_(get:"items") {
      items {
        total: pageInfo @_(get:"count") {
          count
        }
        data: edges @_(each: {assign:"node"}) {
          node {
            ...StudentAttendanceResult
          }
        }
      }
    }
  }
    ${resultFragment}
  `,
  getManyReferenceResultRegular: ({ resultFragment }) => gql`{
    items {
      total: pageInfo @_(get:"count") {
        count
      }
      data: edges @_(each: {assign:"node"}) {
        node {
          ...StudentAttendanceResult
        }
      }
    }
  }
    ${resultFragment}
  `,
  getManyReferenceResult: ({ resultFragment }, { getManyReferenceResultOpposite, getManyReferenceResultRegular }) => ({
    meetingLink: getManyReferenceResultRegular({ resultFragment }),
    studentLink: getManyReferenceResultRegular({ resultFragment }),
  }),
}
