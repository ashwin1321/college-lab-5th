let jsonobj = {
    name: 'Abced',
    faculty: 'Computer Science',
    interest: 'nothing',
    github: 'Github.com'
}

console.log(jsonobj);

let myJson = JSON.stringify(jsonobj);
console.log(myJson);

// replacing the element in the string
myJson = myJson.replace("Abced", 'fghik');
console.log(myJson);

// converting string back to object
newjson = JSON.parse(myJson);
console.log(newjson);