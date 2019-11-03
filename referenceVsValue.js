// In JS you can pass data in two ways. By reference and by value

// Passing data by reference
const list1 = [1, 2, 3, 4, 5]
const list2 = list1
list1.push(6, 7, 8)
console.log('list2',list2) // returns [1, 2, 3, 4, 5, 6, 7, 8]
// list1 and list2 are both referencing the same array

// Objects and array are passed by reference is JS

var person1 = {
  name: 'Alex',
  age: 30
};

var person2 = person1;

person2.name = 'Kyle';

console.log(person1); // the name in this object is updated to 'Kyle'

// let's see a different example
var list3 = [1, 2, 3, 4, 5]
var list4 = list3
list3 = [10, 20, 30] // we are assigning a new object to a pre-existing variable
console.log('I expect [10, 20, 30] but I get something else', list4) // returns [1, 2, 3, 4, 5]
// The reason why list4 does not get updated is because list4 is still referencing the original array
// [10, 20, 30] is a new object and list4 is not aware of it
// Important: you cannot ovverride the value of list3 if the variable was created using const
// In that case you would get TypeError: Assignment to constant variable.

// How can you copy the value in list5 to list6 without creating a reference to the same array?
// method 1: spread operator
console.log('Copy an array without referencing it')
const list5 = [1, 2, 3, 4, 5]
const list6 = [...list5]
list5.push(6, 7, 8)
console.log('list6 uses spread',list6)

// method 2: call slice() with no arguments
const list7 = [1, 2, 3, 4, 5]
const list8 = list7.slice()
list7.push(6, 7, 8)
console.log('list8 uses slice', list8)

// method 3: call concat() with an empty array as argument
const list9 = [1, 2, 3, 4, 5]
const list10 = list9.concat([])
list9.push(6, 7, 8)
console.log('list10 uses concat', list10)

// Passing data by value
var string1 = 'Tampa';
var string2 = string1;
string1 = 'Venice';

console.log(string2); // this will log out Tampa
// Strings are passed by value, so string2 is set to Tampa
