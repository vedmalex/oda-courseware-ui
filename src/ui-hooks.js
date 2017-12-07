exports.UserUI = {
  name: 'UserUI',
  'entities.User': {
    'metadata.UI': {
      listName: 'userName',
      list: ['enabled', 'isAdmin', 'isSystem'],
      show: ['^password'],
    },
  }
}

exports.PersonUI = {
  name: 'PersonUI',
  'entities.Person': {
    'metadata.UI': {
      listName: 'fullName',
      list: ['fullName', 'ages'],
      edit: ['^asCurator', '^asStudents'],
      embedded: ['socialNetworks', 'emails', 'phones', 'user'],
    },
  }
}

exports.MeetingUI = {
  name: 'MeetingUI',
  'entities.Meeting': {
    'metadata.UI': {
      listName: 'date',
      embedded: ['students'],
    },
  }
}

