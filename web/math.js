 // Printing the Math Object
 let m = Math;
 console.log(m);

 // Printing the constants from Math Object
 console.log(`The value of Math.E is ${Math.E}`);
 console.log(`The value of Math.PI is ${Math.PI}`);
 console.log(`The value of Math.LN2 is ${Math.LN2}`);
 console.log(`The value of Math.LOG2E is ${Math.LOG2E}`);


 // Printing the Functions from Math Object
 let a = 34.6735;
 let b = 65.12;
 console.log("The value of a and b is ", a, b);
 console.log("The value of a and b rounded is ", Math.round(a), Math.round(b));
 console.log('2 raised to power 2 is ', Math.pow(3, 2))
 console.log('the square root of 36 is ', Math.sqrt(36))
 console.log('The ceiling value of 4.5 is ', Math.ceil(4.5));
 console.log('The floor value of 4.5 is ', Math.floor(4.5));

 // Absolute Value
 console.log('The absolute value of -4.5 is ', Math.abs(-4.5));

 // Trigonometric Function
 console.log('The value of sin(45) is ', Math.sin(45)); // same goes with cos, tan, cosec, sec, and cot

 // Min and Max value
 console.log('The minimum value in 4,5,6,15 is ', Math.min(4, 5, 6, 15));
 console.log('The maximun value in 4,5,6,15 is ', Math.max(4, 5, 6, 15));

 // Generating the random number
 let r = Math.random();
 console.log('The random number is ', r);
 let x = 1;
 let y = 100;
 let r1 = x + (y - x) * Math.random();
 console.log("The random number between 1 and 100 is ", r1);