const expect = require('expect')

var {generateMessage} = require('./message')



describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var from = 'Lee'
    var text = 'Test'
    var message = generateMessage(from, text)
    expect(message).toInclude({from, text})
    expect(message.createdAt).toExist().toBeA('number')
  })
})
