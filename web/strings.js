var str = "Thf is is is a string";
console.log(str);
var position = str.indexOf('is');
console.log(position);

// last occurence of a substring
position = str.lastIndexOf('is');
console.log(position);

// substring from a string  // SLICING
var substr1 = str.slice(1, 5);
console.log(substr1)
var replaced = str.replace('string', 'Ashwin');
console.log(str);
console.log(replaced);

// UPPER CASE LOWER CASE //
console.log(str.toUpperCase());
console.log(str.toLowerCase());
var newstr = str.concat(" Wassap");
console.log(newstr)

var char3 = str.charAt(2);
console.log(char3);

// objects
let employee = {
    name: 'Ashwin',
    salary: '10',
    address: 'Maitidevi'
};
console.log(employee);
console.log(employee.name);
console.log(employee["salary"]);


// Array
let names = new Array(1, 2, 4, 'Ashwin', undefined);
names.push("Pushed_item");
console.log(names);
names.pop();
console.log(names);