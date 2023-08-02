// var readlineSync = require('readline-sync');
// // var userName = readlineSync.question('May I have your name? ');
// // console.log('Hi ' + userName);
// // console.log('Welcome ' + userName);

// var score = 0;
// var yourAge = readlineSync.question(' Is your age is greater than 25? ')
// console.log('You Entered ' + yourAge);
// if (yourAge === 'yes') {

//     console.log('You are right');
//     score += 1;

// }
// else {

//     console.log('You are Wrong');
//     score -= 1;
// }
// console.log('Your score ' + score);






// var score = 0;
// var yourfrom = readlineSync.question(' Are you from Dhaka ? ')
// console.log('You Entered ' + yourfrom);
// if (yourfrom === 'no') {

//     console.log('You are right');
//     score = score + 1;

// }
// else {

//     console.log('You are Wrong');
//     score -= 1;
// }
// console.log('Your score ' + score);


function add(numberone, numbertwo) {
    console.log('Number One', numberone, 'Number Two', numbertwo);
    var sum = numberone * numbertwo;
    return sum;

}
var result = add(5, 9)
console.log('the answer of 9+5 is ', result);