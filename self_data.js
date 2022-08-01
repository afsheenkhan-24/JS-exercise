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
console.log(company.employee);
var no_of_employees = company.employee.length;
console.log(no_of_employees);


// Delete object
delete company.employee[2];
console.log(company.employee);


// Getting the last item of array
const last_item = company.employee.pop();
console.log(last_item);


// Add in array
const added_item = company.employee.push({
    "name": "Revati Nimbalkar",
    "id": 204009,
    "address": "Satara",
    "work" : "Remote working",
    "promote": true
});
console.log(added_item);

