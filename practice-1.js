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

var data= [];
for(let i = 1; i <= 10; i++){

    let x =  Math.ceil(Math.random() * 10);
    
     data.push(x)
}
let secondData = data.filter(function(el){
    return el >= 5;
});
    console.log(secondData);

