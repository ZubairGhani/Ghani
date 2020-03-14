let _ = require('lodash')

// API = Application Programming Interface

console.log(_.kebabCase('Hello world!'))

function toCamelCase(str) {
  return _.camelCase(str)
}

// let toCamelCase = function(str) {
//   return _.camelCase(str)
// }

// let toCamelCase = str => _.camelCase(str)

// let toCamelCase = _.camelCase

console.log(toCamelCase('Hello world!'))

/*

Table of 1  :   1   2   3   4   5   6   7   8   9  10
Table of 2  :   2   4   6   8  10  12  14  16  18  20
Table of 3  :   3   6   9  12  15  18  21  24  27  30
...
Table of 100:  10  20  30  40  50  60  70  80  90 100
*/

console.log(`
${_.padStart(1, 3)}
${_.padStart(10, 3)}
${_.padStart(100, 3)}
`)
