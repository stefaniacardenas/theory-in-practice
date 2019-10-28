// call() vs apply()
// how do they work?
// what arguments do they take?
// how are they different?


const person1 = {name: 'Stef', age: 24, size: 'S'};
const person2 = {name: 'Zara', age: 45, size: 'L'};

const sayHello = function(){
    console.log('Hello, ' + this.name);
};

const sayGoodbye = function(){
    console.log('Goodbye, ' + this.name);
};

sayHello()
sayGoodbye()

sayHello.call(person1) // person1 becomes the `this` inside that function scope
sayGoodbye.call(person2) // person2 becomes the `this` inside that function scope

sayHello.apply(person1) // person1 becomes the `this` inside that function scope
sayGoodbye.apply(person2) // person2 becomes the `this` inside that function scope


const say = function(greeting){
    console.log('This is the say function', greeting + ', ' + this.name);
};

say.call(person1, 'Hello'); // 'Hello' is the argument, person1 is the context
say.call(person2, 'Goodbye'); // 'Goodbye' is the argument, person2 is the context

const update = function(name, age, size){
    this.name = name;
    this.age = age;
    this.size = size;
};

update.call(person1, 'Betty', 50, 'M'); // you can pass as many arguments as you want with call
console.log('person1 after update is called',person1) // returns {name: 'Betty', age: 50, size: 'M'}

// The limitations of call quickly become apparent when you want to write code
// that doesn't (or shouldn't) know the number of arguments
// that the functions need. For example, a dispatcher.

// So that's where apply comes in - the second argument needs to be an array,
// which is unpacked into arguments that are passed to the called function.

const dispatch = function(person, method, args){
    // the second argument is a function over which you call apply()
    // apply accepts the context and a list of arguments
    // apply doesn't know how many arguments you are passing,
    // it will just take the array, unpack it and assign each value to the arguments
    method.apply(person, args);
};

dispatch(person1, say, ['Hello']);
dispatch(person2, update, ['Betty', 50, 'M']);


// Summary
// Difference between call and apply.
// Both can be called on functions
// which they run in the context of the first argument
// In `call` the subsequent arguments are passed in to the function as they are,
// while `apply` expects the second argument to be an array
// that it unpacks as arguments for the called function.

// More examples

const car1 = {
  brand: 'Porsche',
  getCarDescription: function(cost, year, color) {
    console.log(`This car is a ${this.brand}. The price is $${cost}. The year is ${year}. The color is ${color}.\n`);
  }
};

const car2 = {
  brand: 'Lamborghini'
};

const car3 = {
  brand: 'Ford'
};

car1.getCarDescription(80000, 2010, 'blue');
car1.getCarDescription.call(car2, 200000, 2013, 'yellow');
car1.getCarDescription.apply(car3, [35000, 2012, 'black']);
