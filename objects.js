 var details = {
    "name": "Reddy",
    "id": 35,
    "age":23,
    "location": "KDR",
    "full name":"Gangi Reddy"
};

  // console.log(Object.keys(details))

// console.log(details);
// console.log(details.full)

// console.log(details["name"])
// console.log(details.age)
// console.log(details.location)
// console.log(details.id)
// console.log(details["full name"])

console.log(details["full name"]);

 details["location"] = "Banglore"
details.education = "B.tech";

delete details.id;

 console.log(details);

var keys = Object.keys(details);

 console.log(keys)
 for(var i=0; i<= keys.length; i++){

     console.log( details["location"],i)
    
     console.log(details[keys[i]],i)

 }
var values= Object.values(details);
console.log(values)
for(var i=0; i<values.length; i++){

     console.log( details[values[i]],i)
}


var details = {
    name: "Reddy",
    id: 35,
    age: 23,
    location: "KDR",
    "full name": "Gangi Reddy"
};

var values = Object.values(details);

for (var i = 0; i < values.length; i++) {
    console.log(values[i],i);
}