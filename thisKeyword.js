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
