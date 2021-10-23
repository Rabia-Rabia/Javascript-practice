// /*var obj = {}
    
// obj.name = 'Rabia';
// obj.age = 15;
// console.log(obj.age);

// for(i = 0; i <= 6; i++){
//     if(i === 3){
//         continue;
//     }
//     console.log(i);

// }

// function myFunction(x, y){
//     return x + y
// }
// var myNumber = myFunction(2, 3);

// console.log(myNumber);*/






// function myFunction(a,b, myFunc){
//     return myFunc(a, b)
// }

// function add(x, y){
//     return x + y;
// }

// function substraction(x, y){
//     return x - y;
// }

// function multiplication(x, y){
//     return x * y;
// }

// function division(x, y){
//     return x / y
// }

//console.log(myFunction(6, 4, division));

// function myFunction(x, y){
//     var total = x + y;

//     if( total === 9){
//         return '9 is not allowed';  
//     }

//     return total;
   
// }

//     var myNumber = myFunction(4, 6);
//     console.log(myNumber);


// var init = 0;

// function myFunction(num, limit){

//    init = init + num;
//    if(2 === num){
//     return init; 
//    }

//    return myFunction(num - 1);

// }
// console.log(myFunction(3, 1));

// var result = 1;
// function getFactorial(num){
//     for(var i = 1; i <= num; i++){
//         result = result * i;
//         if(i === num){
//             return result;
//         }

  
//     }
// }
// console.log(getFactorial(2));

// 5! = 5 * 4! 
// n! = n * (n - 1)!;

// var init = 1;

// function myfunction(num){
//     init = init * num;
//     if( 1 === num){
//         return init;
//     }
//         return myfunction(num - 1)
// }
//     console.log(myfunction(5));
//console.log(Math.abs(x)); // remove minus(-) sign.

    // console.log(Math.ceil(x)); // to make it round remove point value and icrease

// let x = 11.9;
 
    // console.log(Math.floor(x)); //to make it round remove point value and decrease the value.

    // console.log(Math.round(x));

    //4.45 *10
    
//    let x =  Math.ceil(Math.random() * 10);

//    console.log(x);
 
//     for(let i = 1; i <= 10; i++){

//        let x =  Math.ceil(Math.random() * 10);

//         console.log(x);
// }

// var data= [];
// for(let i = 1; i <= 10; i++){

//     let x =  Math.ceil(Math.random() * 10);
    
//      data.push(x)
// }
// let secondData = data.filter(function(el){
//     return el >= 5;
// });
//     console.log(secondData);

// swap variables

// let x = 5;
// let y = 10;

// let temp = x; // 5

// x = y;
// y = temp;
//  console.log(x, y);

// Array slice

// let num = [ 4, 5, 6, 19, 20, 21, 30]

// let newNum = num.slice(3, 5);

// console.log(newNum);

// let num = [ 4, 5, 6, 19, 20, 21, 30]

// num.splice(3, 2, 100, 200, 400); // splice

// console.log(num);


// let month = [ 'jan', 'march', 'april', 'june', 'july']

// month.splice(1, 0, 'feb'); // splice

// console.log(month);

// es6 arrow function
//ecma script

// let myFunction = function(nickname){
//     return 'Rabia ' + nickname;

// }
//      console.log(myFunction('rabi'));

// let myFunction = (prefix, nickname) => prefix + 'Rabia ' + nickname;

//      console.log(myFunction('Ms.', 'rabi'));

//es6 array push with spread syntax

// let num = [2, 3, 4, 5]

// let newNum = [...num, 6]

// console.log(newNum);

// let user = { 
//     username: 'Rabia',
//     age: '5'
// }

// let newUser = {
//     ...user, 
//     email: 'rabia@gmail.com'
// }

// console.log(newUser);

// ternary operator

// if(5 < 6){
//     let result = 'yes';
//     console.log(result);
// }

// write this in ternary operator it is neccessary to give else value after colon.

// 5 > 6 ? console.log('yes') : console.log('no');

// reduce

// let user = [ 5, 4, 6, 7]

// let newData = user.reduce((x,y) => {
//     let z = x + y;
//     return z;
// }, 0);

// console.log(newData);


// let user = [ 5, 4, 6, 7]

// let newData = user.reduce((pre) => {
//     let total = pre + 1;
//     return total;
// }, 0);

// console.log(newData);
