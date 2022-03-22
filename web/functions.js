let name0 = "Ashwin";
let name1 = "A";
let name2 = "As";
let name3 = "Ash";

// FUNCTIONS 
function greet(name, greeting) {
    console.log(`${greeting} ${name}. ${name} is a good boy.`)

}
let greeting = 'Good Morning';
greet(name0, greeting)
greet(name1, greeting)
greet(name2, greeting)
greet(name3, greeting)

let returnval = greet(name3);
console.log(returnval);

function sum(a, b, c) {
    d = a + b + c;
    return d;
}
let returnvl = sum(1, 2, 3);
console.log(returnvl);