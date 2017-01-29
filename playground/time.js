var moment = require('moment')

var someTimestamp = moment().valueOf()
console.log(someTimestamp)

var date = moment()
// date.add(100, 'years').subtract(9, 'months')
console.log(date.format('h:mm a'))
