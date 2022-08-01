var company = {
    "employee" : [
        {
            "name": "Revati Nimbalkar",
            "id": 204001,
            "address": "Satara",
            "work" : "Remote working",
            "promote": true
        },
        {
            "name": "Zaid Shaikh",
            "id": 204002,
            "address": "Pune",
            "work" : "Physical work",
            "promote": true
        },
        {
            "name": "Gargi Gadkari",
            "id": 204003,
            "address": "Mumbai",
            "work" : "Remote working",
            "promote": false
        },
        {
            "name": "Mayur Shinde",
            "id": 204004,
            "address": "Pune",
            "work" : "Physical work",
            "promote": true
        },
        {
            "name": "Priya Raut",
            "id": 204005,
            "address": "Delhi",
            "work" : "Remote working",
            "promote": false
        },
        {
            "name": "Srushti Hirve",
            "id": 204006,
            "address": "Pune",
            "work" : "Physical work",
            "promote": true
        },
    ]
}

var no_of_employees = company.employee.length;
console.log(no_of_employees);


// Update object
company.employee[0] = {
    "name": "Ali Sayyed",
    "id": 204001,
    "address": "Pune",
    "work" : "Physical work",
    "promote": true
}
// console.log(company.employee);


// Add object
company.employee[no_of_employees] = {
    "name": "Mehek Khan",
    "id": 204007,
    "address": "Pune",
    "work" : "Physical work",
    "promote": false
}
// console.log(company.employee);
var no_of_employees = company.employee.length;
// console.log(no_of_employees);


// Delete object
delete company.employee[2];
console.log(company.employee);


// pop - Getting the last item of array
const last_item = company.employee.pop();
console.log(last_item);


// push - Adds an element at the end of the array
const added_item = company.employee.push(
    {
        "name": "Revati Nimbalkar",
        "id": 204009,
        "address": "Satara",
        "work" : "Remote working",
        "promote": true
    }
);
console.log(company.employee);

// unshift - adds one or more elements to the beginning of the array
const first_item = company.employee.unshift(
    {
        "name": "Afsheen Khan",
        "id": 204010,
        "address": "Kalyan",
        "work" : "Remote working",
        "promote": true
    }
);
console.log(company.employee);


// shift - removes the first element from array
console.log(company.employee.shift());


// Async and await

async function greet() {
    const response = await fetch("https://api.github.com/users");
    const user = await response.json;
    return user;
}

const greetings = greet();
console.log(greetings);
greetings.then(user => console.log(user));