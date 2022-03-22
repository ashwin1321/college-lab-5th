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