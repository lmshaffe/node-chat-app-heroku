const expect = require('expect')

var {generateMessage, generateLocationMessage} = require('./message')



describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var from = 'Lee'
    var text = 'Test'
    var message = generateMessage(from, text)
    expect(message).toInclude({from, text})
    expect(message.createdAt).toExist().toBeA('number')
  })
})

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Lee'
    var lat = 27.9506
    var long = -82.4572
    var url = `https://www.google.com/maps?q=${lat},${long}`
    var message = generateLocationMessage(from, lat, long)

    expect(message).toInclude({from, url})
    expect(message.createdAt).toExist().toBeA('number')
  })
})
