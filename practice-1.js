/*var obj = {}
    
obj.name = 'Rabia';
obj.age = 15;
console.log(obj.age);

for(i = 0; i <= 6; i++){
    if(i === 3){
        continue;
    }
    console.log(i);

}

function myFunction(x, y){
    return x + y
}
var myNumber = myFunction(2, 3);

console.log(myNumber);*/


function myFunction(a,b, myFunc){
    return myFunc(a, b)
}

function add(x, y){
    return x + y;
}

function substraction(x, y){
    return x - y;
}

function multiplication(x, y){
    return x * y;
}

function division(x, y){
    return x / y
}

console.log(myFunction(6, 4, division));