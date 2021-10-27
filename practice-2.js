
// Create new array which has only username

let user = [
    {
        name: "haris",
        age: 20,
        username: "harsi"
    },

    {
        name: "saad",
        age: 30,
        username: "saadi"
    },

    {
        name: "ali",
        age: 10,
        username: "ali22"
    },

    {
        name: "ibrahim",
        age: 14,
        username: "Ibb123"
    },
];

// let username = user.reduce((prev, next)=> {
//     return [...prev, next.username]

// }, [] );

// console.log(username);

// Create a new object which has only username and name

// let username = user.reduce((prev, next)=> {
//     return {
//        name: [...prev.name, next.name],
//        username: [...prev.username, next.username]
//     }

// },
// {
//     name: [],
//     username: []
// } );

// console.log(username);

// create new array which has username with 18+ age

// let username = user.reduce((prev, next) => {
//     if(next.age > 18) {
//         return [...prev, next.username]
//     } else {
//         return prev;
//     }

// }, []);

// console.log(username);

//Math.sqrt();

// let squareRoot = Math.sqrt(60);
// console.log(squareRoot);


//Math.max();
// let max = [12, 34, 67]
// Math.max(12,34,67);
// console.log(Math.max(12, 34, 67));

// find the circumference of a circle where radius is 10
//Math.PI
//console.log(2 * Math.PI * 10);

// let radius = 10;
// console.log(2 * Math.PI * radius);

// function 
// function getCircumference(radius){
//     return 2 * Math.PI * radius;
// }

// console.log(getCircumference(10));

// function getCircumference(radius = 0){
//     return 2 * Math.PI * radius; // if we donot asign value of radius or its zero than it return zero
// }
    
// console.log(getCircumference());

//sum all the integer data from an array with a function

// let num = [1, 2, 3,6];
// let total = 0;
// for(let i = 0; i < num.length; i++){
//     total += num[i];

// }
//     console.log(total);

// let nums = [1, 2, 3,6, 5];
// let total = 0;
// for(num of nums){
//     total += num

// }
//     console.log(total);

// function getTotal(nums){
//     let total = 0;
//     for(num of nums){
//         total += num
//     }
//         return total;
// }
// console.log(getTotal([2, 4, 5]));

// Find the largest element of an array

    // let chemistryMarks = [12, 60, 70, 100]
    // let largest = 0;
    // for(let i = 0; i < chemistryMarks.length; i++){
    //     if(chemistryMarks[i] > largest){
    //         largest = chemistryMarks[i];
    //     }
        
    // }
    // console.log(largest);

    // let chemistryMarks = [-2, -6, -7]
    // let largest = chemistryMarks[0];
    // for(let i = 0; i < chemistryMarks.length; i++){
    //     if(chemistryMarks[i] > largest){
    //         largest = chemistryMarks[i];
    //     }
        
    // }
    // console.log(largest);
// Try to create an array with fibonacci series

// Basic JavaScript Concepts

// OUTPUT

// console.log('Hello World');
// alert('Hello World');
// document.write('Hello World');
// document.getElementById().innerHTML = 'Hello World';

// // JavaScript Variables

// var x = 5;
// var y = 10;
// console.log(x + y);
// // 15

// var person = 'John';
// console.log('My name is ' + person + '.');
// // My name is John

