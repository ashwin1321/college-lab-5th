// For Looop //

// let i = 0;
// for(i=0; i<3; i++){
//     console.log(i);
// }

let arr = ['A', 'B', 'C', 'D', 'E', 'F'];
// for (let i = 0; i < arr.length; i++) {
//     console.log(`Hello ${arr[i]}`);

// }


// This can also be written as
// arr.forEach(function f(element){                // runs for every item in arr
//     console.log('Hello, ' + element);
// });


// Can also be written as

// for (element of arr){                                // for-of loop
//     console.log(`Hello ${element} to modern Javascript for loop.`);
// }


// Looping the items in a object  we use for-in loop
let employee = {
    name: 'Ashwin',
    salary: '10',
    address: 'Maitidevi'
}

for (key in employee) {
    console.log(`The ${key} of employee is ${employee[key]}`);
}
// WHILE //
let i = 0;
while (i < 4) {
    console.log(`${i} is less than 4`);
    i++;
}


// DO WHILE // 
let j = 34;
do {
    console.log(`${j} is less than 4 and we are inside do-while loop`);
    j++;
}
while (j < 4);