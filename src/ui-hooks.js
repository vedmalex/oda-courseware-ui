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

exports.CuratorUI = {
  name: 'CuratorUI',
  'entities.Curator': {
    'metadata.UI': {
      listName: 'fullName',
    },
  }
}

exports.StudentUI = {
  name: 'StudentUI',
  'entities.Student': {
    'metadata.UI': {
      listName: 'personFullName',
    },
  }
}

exports.EmailUI = {
  name: 'EmailUI',
  'entities.Email': {
    'metadata.UI': {
      quickSearch: ['email', 'type'],
      list: ['enabled', 'isAdmin', 'isSystem'],
      show: ['^password'],
    },
  }
}

exports.StudentAttendanceUI = {
  name: 'StudentAttendanceUI',
  'entities.StudentAttendance': {
    'metadata.UI': {
      edit: ['^student', '^meeting'],
      show: ['^student', '^meeting'],
    },
  }
}