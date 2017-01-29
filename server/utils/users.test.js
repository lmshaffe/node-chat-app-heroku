const expect = require('expect')

const {Users} = require('./users')

describe('Users', () => {

  beforeEach(() => {
    users = new Users()
    users.users = [{
      id: '1',
      name: 'Dex',
      room: 'Node fans'
    },
    {
      id: '2',
      name: 'Amber',
      room: 'React fans'
    },
    {
      id: '3',
      name: 'Lee',
      room: 'Node fans'
    }
  ]
  })

  it('should add new user', () => {
    var users = new Users()
    var user = {
      id: '123',
      name: 'Lee',
      room: 'USF Fans'
    }
    var resUser = users.addUser(user.id, user.name, user.room)

    expect(users.users).toEqual([user])
  })

  it('should remove a user', () => {
    var userId = '3'
    var user = users.removeUser(userId)

    expect(user.id).toBe(userId)
    expect(users.users.length).toBe(2)
  })

  it('should not remove invalid user', () => {
    var userId = 'sdfasfd3'
    var user = users.removeUser(userId)

    expect(user).toNotExist()
    expect(users.users.length).toBe(3)
  })

  it('should find user', () => {
    var userId = '1'
    var user = users.getUser(userId)

    expect(user.id).toBe(userId)
  })

  it('should not find invalid user', () => {
    var userId = 'dsfasjf'
    var user = users.getUser(userId)

    expect(user).toNotExist()
  })

  it('should return names for Node fans', () => {
    var userList = users.getUserList('Node fans')

    expect(userList).toEqual(['Dex', 'Lee'])
  })

  it('should return names for React fans', () => {
    var userList = users.getUserList('React fans')

    expect(userList).toEqual(['Amber'])
  })
})
