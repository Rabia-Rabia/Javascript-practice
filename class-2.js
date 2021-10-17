var obj = {
    rabia: 5,
    dubai: function () {
        console.log(2+4);
    }
}
//obj.dubai();

var pc = "personal Computer";
//console.log(pc.length)

var pc = {
    name: "Acer",
    model: "s123",
}
//console.log(pc.model); //write another

//console.log(pc['model']);

//Array

var pc = [
    'acer',
    's123',
    'price',
]
//console.log(pc.length)
//console.log(pc[0].length)

var data = 0.456;
//console.log(data.toFixed(2)); //this is to get string value
//console.log(parseFloat(data.toFixed(2))); // this is to get the integer value 

//we can write this another

var data = 0.4567;
var newData = data.toFixed(2);
var secondData = parseFloat(newData);

//console.log(secondData)

var user = [
    'rabia',
    'haris',
    'saad'
];
user.push('zegham');
user.push('hareem');
//console.log(user) 

var x = user.push('areej')
//console.log(x) //to get length of array
user.pop()
console.log(user)