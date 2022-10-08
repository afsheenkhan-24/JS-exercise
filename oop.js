// OOP

// Encapsulation - grouping everything together
let employee = {
    baseSalary : 30_000,
    overtime : 10,
    rate : 20,
    getWage : function() {
        return this.baseSalary + (this.overtime * this.rate);
    }
};

employee.getWage();


// Abstraction - hiding the details

// Inheritance - is a mechanism that allows to eliminate redundant code

// Polymorphism = Poly(many) + morphism(forms)

// object
// ES6 has a replacement of var
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function() {
        console.log("draw");
    }
};

circle.draw();

// // Factory function
// function createCircle(radius) {
//     return {
//         radius,
//         draw: function() {
//             console.log("draw");
//         }
//     };
// }

// const cirle = createCircle(5);
// circle.draw();

// Constructor function
// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log("draw");
//     }
// }
// const circle = new Circle(3);

// // Adding properties to object
// circle.location = {x: 1};
// // Bracket notation - circle["location"] = { x : 1 };
// console.log(circle);

// // Removing properties from object
// delete circle.location;
// console.log(circle);

// // Abstraction
// function Circle(radius) {
//     this.radius = radius;
//     let defaultLocation = { x: 0, y: 0 };   // substitute this with let so it's scope remains within the function
//     let computeOptimumLocation = function(factor) {
//         // ..
//     }

//     this.draw = function() {
//         let x, y;

//         computeOptimumLocation(0.2);

//         console.log("draw");
//     };
// }

// const circle = new Circle(10);
// circle.draw()