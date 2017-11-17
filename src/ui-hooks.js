exports.UserUI = {
  name: 'UserUI',
  'entities.User': {
    'metadata.UI': {
      listName: 'userName',
      list: ['enabled', 'isAdmin', 'isSystem'],
      show: ['^password'],
      embedded: ['asTeacher', 'asStudent']
    },
  }
}

exports.PersonUI = {
  name: 'StudentUI',
  'entities.Student': {
    'metadata.UI': {
      listName: 'fullName',
      list: ['fullName', 'ages', '^firstName', '^lastName', '^middleName'],
      embedded: ['profile']
    },
  }
}

exports.TeacherUI = {
  name: 'Teacher',
  'entities.Teacher': {
    'metadata.UI': {
      listName: 'lastName',
    },
  }
}

exports.StudentsGroupUI = {
  name: 'StudentsGroupUI',
  'entities.StudentsGroup': {
    'metadata.UI': {
      listName: 'name',
      embedded: ['students', 'subjects']
    },
  }
}

exports.StarshipUI = {
  name: 'StarshipUI',
  'entities.Starship': {
    'metadata.UI': {
      listName: 'name',
      list: ['name', 'model', 'starshipClass', 'manufacturers', 'costInCredits', 'length'],
    },
  }
}

exports.VehicleUI = {
  name: 'VehicleUI',
  'entities.Vehicle': {
    'metadata.UI': {
      listName: 'name',
      list: ['name', 'model', 'vehicleClass', 'manufacturers', 'costInCredits', 'length'],
    },
  }
}

