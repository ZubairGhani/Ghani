/*
fly(from, to)

returns a string that says: 'Paris -> London', but it will say "You're drunk" if 'from' is the same as 'to'.
*/

function fly(from, to) {
  return from !== to ? `${from} -> ${to}` : "You're drunk"

  //   if (from !== to) {
  //     return `${from} -> ${to}`
  //   } else {
  //     return "You're drunk"
  //   }

  // TODO: turn it into a switch
}

// console.log(fly('Paris', 'London'))
// console.log(fly('LA', 'LA'))

function printEvenNumbers(maxNumber) {
  for (let i = 0; i <= maxNumber; i++) {
    if (isEven(i)) {
      console.log(i)
    }
  }
}

// printEvenNumbers(10)

// let isEven = function(num) {
//   return num % 2 === 0
// }

// auto-binding
// let isEven = num => num % 2 === 0

function isOdd(num) {
  return num % 2 !== 0
}

function isEven(num) {
  return num % 2 === 0
}

// sum: (x, y) -> x + y

// function sum(a, b) {
//   return a + b
// }
// console.log(sum(2, 3))

function sum(a, b, callback) {
  let sum = a + b
  callback(sum)
}

sum(2, 3, function(sum) {
  console.log(sum)
})

fetchData('https://www.ingloriouscoderz.it', function(results) {
  console.log(results)
})

button.onclick = function(event) {
  console.log('pressed!')
}

let operationName = 'sum'

function sum(a, b) {
  return a + b
}

function subtract(a, b) {
  return a - b
}

let operation = operationName === 'sum' ? sum : subtract

operation(2, 3)
