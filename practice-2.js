
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

let username = user.reduce((prev, next) => {
    if(next.age > 18) {
        return [...prev, next.username]
    } else {
        return prev;
    }

}, []);

console.log(username);

