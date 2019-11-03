// Ways of creating an object

// object literal syntax - most common and preferred
const myBoat = {
  length: 24,
  maxSpeed: 45,
  passengers: 14,
  getLength: function() {
    return this.length;
  }
};


// new keyword & Object constructor
const student = new Object();

student.grade = 12;
student.gradePointAverage = 3.7;
student.classes = ["English", "Algebra", "Chemistry"];
student.getClasses = function() {
  return this.classes;
};


// constructor function
// Good for creating multiple objects of the same class quickly
function Car(color, brand, year) {
  // in this case the this does not refer to the function.
  // It refers to the object that will be created.
  // This is because this is a constructor function
  this.color = color;
  this.brand = brand;
  this.year = year;
}

Car.prototype.getColor = function() {
  return this.color;
};

const carlysCar = new Car('blue', 'ferarri', 2015);
const jimsCar = new Car('red', 'tesla', 2014);

console.log(carlysCar.getColor());
console.log(jimsCar.getColor());

// You can also do
const hello = Object.create({})
console.log('this is hello', hello)

// Object keys can only be strings!
// What happens if I try to use another object as a key?
// The object will be coerced into a string. Look at this example
const a = {};
const b = { name: 'b' };
const c = { name: 'c' };

a[b] = 200;
// a['[object Object]'] = 200

a[c] = 400;
// a['[object Object]'] = 400

console.log(a[b]); //returns 400
// console.log(a['[object Object]']);
