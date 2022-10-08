// ES6

// let VS var VS const

// let
for(let i = 0; i < 5; i++) {
    console.log(i);
}
// console.log(i);      // Reference error

// var
for(var i = 0; i < 5; i++) {
    console.log(i);
}
console.log(i);         // No error

// const
const pi = 3.141;
// pi = 12345;  
console.log(pi);        // TypeError: Assignment to constant variable.


// Objects, this, bind
const person = {
    name: "Afsheen",
    walk() {
        console.log(this);
    },
    talk() {}
}

person.walk();

person.name = "Khan";
console.log(person.name);

// walk();     // standalone -> window

const walk = person.walk.bind(person);
walk();


// arrow function
const square = num => num * num;
console.log(square(5));

const company = [
    { id: 1, isOpen: true },
    { id: 2, isOpen: true },
    { id: 3, isOpen: false }
];

const open_company = company.filter(comp => comp.isOpen);
console.log(open_company);


// array.map()
const colors = ["red", "blue", "yellow"];
const items = colors.map(color => color);
console.log(items);

// object destructor
const address = {
    street: 13,
    city: "pune",
    country: "india"
};

const { street, city, country } = address;
// same as ---
/* const street = address.street;
const city = address.city;
const country = address.country; */

const { street: st } = address;


// spread operator - used for combining and cloning
const n1 = [1, 2, 3];
const n2 = [4, 5, 6];

const combined = n1.concat(n2);
console.log(combined);
const combine = [...n1, ...n2];
// const combine = [...n1, 7, ...n2];
console.log(combine); 

// clone 
const clone = [...n2];
console.log(clone);

const first = { name: "Afsheen" };
const second = { job: "intern" };

const combining = {...first, ...second, location: "pune"};
console.log(combining);

const cloning = {...first};
console.log(cloning);


// classes
class Person {
    constructor(name) {
        this.name = name;
    }

    walk() {
        console.log(this);
    }
}

const individual = new Person("Afsheen");


// Inheritance
class Teacher extends Person {
    constructor(name, degree) {
        super(name);
        this.degree = degree;
    }

    teach() {
        console.log("teach");
    }
}

const teacher = new Teacher("Mehek", "BSc");


// module - export <classname> / <functionname> ()........
// object in a file are private my default
// import { Person } from "./person";   no extension with filename


// named export - multiple objects to export
// import {Teacher} from ".\teacher"

// default export - only one object to export
//export default class Teacher extends Person
// import Teacher from "./teacher"
