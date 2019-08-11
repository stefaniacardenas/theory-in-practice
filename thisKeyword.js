// What is `this` in JavaScript?
// `this` refers to whatever object it is directly inside of
//

console.log(this)

const myObject = {
  num1: 5,
  num2: 2,
  c: function() {
    // `this` here refers to the object itself
    console.log('Should print myObject', this)
    console.log(myObject.num1 + myObject.num2 === this.num1 + this.num2 )
  }
}
myObject.c()

// Scope and Self
// this is the global scope
color = 'blue';

var myHair = {
    color: "red",
    logColor: function() {
        // this a common practice in JS to debug scope related issues
        var self = this;
        console.log("In logColor - this.color: " + this.color); // will print red
        console.log("In logColor - self.color: " + self.color); // will print red
        (function() {
            // `this` here has lost reference to the object
            // because now `this` refers to the global scope as we are inside an iife
            console.log("In IIFE - this.color: " + this.color); // will print blue
            // self here is a variable that was defined inside the parent function scope
            // so it will be available here and its value is the object myHair
            console.log("In IIFE - self.color: " + self.color); // will print red
        })();
    }
};

myHair.logColor();
