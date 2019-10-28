// Write a function that knows how many times it has been called and it returns that number
// All functionality should be inside of the function, not outside

const myCounter = () => {
  let count = 0;

  return function() {
    count++;
    return count;
  };
}

const one = myCounter()
const two = myCounter()

console.log('instance one',one()) // returns 1
console.log('instance one',one()) // returns 2
console.log('instance one',one()) // returns 3

console.log('instance two',two()) // returns 1
console.log('instance two',two()) // returns 2
console.log('instance two',two()) // returns 3
console.log('instance two',two()) // returns 4
console.log('instance two',two()) // returns 5
console.log('instance two',two()) // returns 6

const anotherCounter = () => {
  let count = 0;

  return function() {
    if (count < 4) {
      count++;
      return count;
    }
    else {
      console.log('I cannot count anymore')
    }
  };
}

const hey = anotherCounter()
console.log('hey', hey())
console.log('hey', hey())
console.log('hey', hey())
console.log('hey', hey())
console.log('hey', hey())
console.log('hey', hey())
