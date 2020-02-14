'use strict'

// //let i = 0;
// //while (i < 3) { // shows 0, then 1, then 2
// //alert( i );
// //i++;}

// //let i = 3;
// //while  (i > 0){
// //console.log (i)
// //i--;
// //}

// //let str = "NANANANA";
// //String repeated = str.repeat(16);
// //repeated.equals("NANANANAN");

// //let str = "NANANANAN"
// //"NANANANNANAN".repeat()
// //"NANANANANANAN".repeat(10) //
// //"NANANANANANNA".repeat(16) //

// let str = 0;
// let i = 0;
// let test = "stringtest"
// let other_variable

// while (i < 16) {
//   str = str + "Na"
//   console.log(i, "str:", str)
//   test = test + str
//   console.log(i, "test:", test)
//   i++; // i = i + 1
// }

// console.log(str)
// "Hello world!".repeat(16) // ""
// "Hello world!".repeat(1) // "Hello world!"
// "Hello world!".repeat(2) // "Hello world!Hello world!"

/* 
 let num = prompt('Give me a number greater than 100');
 if (num > 100) {
   console.log('Yay, thanks! Just what I wanted!');
 } else {
   console.log('Please try again.');
 }  */

// !(a && b) = !a || !b
//  !(num > 100 && num) = num <=100 || !num
/* 
while (condition) {
  body
} */
/* 
let num = prompt("enter a number greater then 100");
while (!(num > 100 && num)) {
  num = prompt ("try again");
}
console.log('Yay, thanks! Just what I wanted!'); */

// // for (i = 0; i < 16; i++)

// write all even numbers from 1 to 100
/* let i = 2;
while (i <= 100) {
  console.log(i);
  i += 2;
} */
// 2 4 6 8 10 12 ... 100

/* for (let i = 10; i > 0; i--) {
  console.log(i);
} */

/* let i = 0;
i = prompt("write a number more then 100"); */

/* let Z = prompt("write a number greater than 100");
while(Z<=100){
  Z = prompt("write a number greater than 100");
}
console.log ("good-job!"); */

/*
*******
*******
*******

*/

/* let i= 5;
let Hello = ("HELLO WORLD")
while (i>1){
alert (Hello+ " "+ Hello[i]);
i--;
} */

/* let i = 10;
while (i<=100){
  console.log (i);
  i+= 10;
} */

/* let Zubair = 3
while (Zubair) {
  alert (Zubair);
  Zubair--;
} */
/* for (let Zubair= 3 ; Zubair <= 8; Zubair++){
  alert (Zubair);
} */

/* let I = 8;
do {
  alert(I);
  I++;
} while (I < 15); */

/* for (let i = 10; i > 4; i--){
  alert (i);
} */
/* 
for (let i =10; i > 4; i--){
  console.log (i);
} */

/* for (;;){

}
 */

/* let i = 1
 while (i < 70) {
   console.log (i)
 i++;
 if (i >40)
 break;
} */

/* let i = 100
 while (i < 200){ console.log (i)
   i--;
  if (i < -80) 
  break;
 }
  */
/* let i=3;
while (i){
  console.log(i)
  i++;
if (i ==1001)
break } */
/* let i = 1
 while (i < 70) {
   console.log (i)
 i++;
 if (i >40)
 break;
}
 */

/* for(i=1; i<=N; i++){
console.log (i)}
 */
/* 
 let I = 1
 while (I <= 10){
   console.log (I)
   I++;
 } */

/* 
 let N = prompt ("please enter a number ");
 let I = 1;
 while (I<N){
   console.log (I)
   I++;
 } */
/* 
 let i= 1
 let n = prompt ("add a number ");
 while (n>=i){
   console.log(n);
   n--;
 } */

/* let z =90;
while (z>=65){
 console.log( String.fromCharCode(z))
 z--;
} */

/* let i = 2
while (i<=10){
console.log (i)
i+=2;
} */

/* 
let i = 1;
while (i<=10) {
  if (i % 2 == 0) {
    console.log(i);
  }
  i++;
} */
/* let i= 0 10 20 30 40 50 60  */

/* for (let i = 0; i <= 100; i = i + 10) {
  console.log(i);
}
 */
/* let i =10
while (i <=60){
  console.log(i);
  i+=10;
} */

/* let i = 60 50 40 30 20 10 0 */
/* for (i=60; i>=0; i-=10){
  console.log (i)
} */

/* let i = 60;
while (i>=0){
  console.log(i)
  i-=10;
} */

// i = 0  1  2  3  4  5
// p = 0 20 40 60 80 100
// Alex
/* for (let i = 0; i <= 5; i++) {
  console.log(i * 20);
}
 */
/* b= 100 1000 10000 100000 */
/* for (let b= 100; b<=100000; b*=10){
  console.log(b)
}
 */
// b *= 10
// b = b * 10

/* let i=0
while(i<=5){
  console.log(i*20);
  i++;
} */
// i = 0 1 2 3 4 5 6 7 8 9 10.. 100
// p = 0                        20. ..... 40...
// Yannick

// i = 0 1 2 3 4 5 6 7 8 9 10.. 100
// p = 0                        20. ..... 40...
// Yannick

/* 
for (let i = 0; i <= 100; i++) {
  let isDivisible = i *20 === 0; 
  if (isDivisible) {
    console.log(i);
  }
} */

/* for (let i=10; i<=40; i++){
  let isDivisible= i%10===6;
  if (isDivisible){
    console.log(i);
  }
}
 */

//initial condition INIT
//iterator
//processing
//stop condition

// let i=0
// while(i<=100){
//   let isDivisible = i %20 === 0;
//   if (isDivisible) {
//     console.log(i);
//   }
//   i++
// }

/* 
function sumOdds (n) {
  let sum = 0
  
  for (let i = 1; i <= n; i += 2) {
    sum += i
  }
  
  return sum
}

console.log(sumOdds(10)) // 25 */

/* let i = 0
while (i <= 100) {
  if (i % 20 === 0) {
    console.log(i);
  }
  i++;
} */

// print the sum of all numbers from 1 to 5
// 1 2 3 4 5  -> print 15
/* let sum =0
for (let i=1; i<=5; i++){
  sum+= i;
 
  
}
console.log(sum);

let print the sum of 45
123456789=   45 */
/* 
let sum =0
for (let i=1; i<=9; i++){
  sum+= i;
  console.log(i,sum)
}
console.log(sum)
 */
// print all multiples of 20 from 100 to 0
// i = 100 80 60 40 20 0
/* for (let i=100; i>=0; i-=20){
  console.log(i);
} */
/* let i =100
while (i>=20){
  console.log(i);
  i-=20;
} */

/*
 *****
 *****
 *****
 */

// const ROWS = 3;
// const COLUMNS = 5;

// for (let i = 0; i < ROWS; i++) {

//   // START: print a single row
//   let row = '';
//   for (let j = 0; j < COLUMNS; j++) {
//     row = row + '*';
//   }
//   console.log(row);
//   // END

// }

// const Rows =5;
// const COLUMNS=5;
// for (let i=0; i< Rows; i++){
//   let row ="";
//   for (let j=0; j< COLUMNS; j++){
//     row=row + "*";
//   }
//   console.log(row);
// }

// console.log (card, points)

// function printHello() {
//   let who = "world";
//   console.log(
//     function printHello() {
//       let who = "world";
//       console.log(`hello ${who}!`)
//     }

// let a = 2 +;
// function alert(params) {
//   console.log(params)
// }

// switch (a) {
//   case 4:
//     alert('Right!');
//     break;

//   case 3: // (*) grouped two cases
//   case 5:
//     alert('Wrong!');
//     alert("Why don't you take a math class?");
//     break;

//   default:
//     alert('The result is strange. Really.');
// }

// let card= "J"
// let points
// switch(card){
//   case 'K':
//     points = 13
//       break
//   case "Q":
//     points =12
//       break
//   case "J":
//     points = 11
//       break
//   case "A":
//     points = 1
//       break

//       default:

// }

switch (browser) {
  case 'Edge':
    alert("You've got the Edge!")
    break

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert('Okay we support these browsers too')
    break

  default:
    alert('We hope that this page looks ok!')
}
let browser
if (browser == 'Edge') {
  alert("You've got the Edge!")
} else if (
  browser == 'Chrome' ||
  browser == 'Firefox' ||
  browser == 'Safari' ||
  browser == 'Opera'
) {
  alert('Okay we support these browsers too')
} else {
  alert('We hope that this page looks ok!')
}

let a = +prompt('a', '')

if (a == 0) {
  alert(0)
}
if (a == 1) {
  alert(1)
}

if (a == 2 || a == 3) {
  alert('2,3')
}

let userName = prompt('give me your money')
function showMessage() {
  let message = 'Hi, ' + userName
  alert(message)
}

showMessage()

function buildRow(columns) {
  let row = ''
  for (let i = 0; i < columns; i++) {
    row *= '*'
  }
  return row
}
function buildButton(row, columns) {
  let button = ''
  for (let i = 0; i < row; i++) {
    button += buildRow(columns) + '\n'
  }
  return button
}

let amount = '5'

switch (amount) {
  case 'Dull':
    damage = 1
    break
  case 'Cool':
    damage = 5
    break
  case 'Bravo':
    damage = 10
    break
  case 'Awesome':
    damage = 15
    break
  case 'Stylish':
    damage = 20
    break
  default:
    alert('not really')
}
function greetings(from, text) {
  alert(from + ':' + text)
}
greetings('ghani', 'lunch break')
greetings('zubair', 'lunch is done')

function greetings(from, text = 'no text given') {
  from = '*' + from + '*'
  alert(from + ' : ' + text)
}
let from = 'ghani'
greetings(from, 'hello')
greetings(from)
