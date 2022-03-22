let jsonobj = {
    name: 'Ashwin Khatiwada',
    faculty: 'Computer Science',
    interest: 'nothing',
    github: 'Github.com/ashwin1321'
}

console.log(jsonobj);

let myJson = JSON.stringify(jsonobj);
console.log(myJson);

// replacing the element in the string
myJson = myJson.replace("Ashwin", 'Ash');
console.log(myJson);

// converting string back to object
newjson = JSON.parse(myJson);
console.log(newjson);