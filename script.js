// Array of objects with information of keys
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
    //iterate through the array of objects
    for(var i = 0; i < contacts.length; i++){
        /*check if the param name and the ith name are equal*/
        if(contacts[i].firstName === name){
            /*return the corresponding contacts ith prop 
        if the corresponding contact prop do not match return "No such property*/
            return contacts[i][prop] || "No such property"
        }   
    }
    return "No such contact"
}

var data = lookUpProfile("Akira", "likes");

console.log(data);
