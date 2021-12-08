// Big O notation
// Big O notation allow us to determine how scalable an algorithm is.
// How long it takes for an algorithm to complete as its input size increases
// It allows us to predict the worst case scenario completion time of an algorithm
// based on the input size

// The function below has a `Constant runtime`
// In bigO Notation this is written as: "O (1)" (pronunced Oh of one)
// It doesn't matter if the array has 5 or 5000 elements, it will always take the same time to run
function printSomething(array) {
  // this function will always log
  // the first two elements of an array
  console.log(array[0])
  console.log(array[1])
}
printSomething([1,2,3,4,5])
printSomething(new Array(50))
// time is the x axis, while input size is the y axis.
// if y grows time will stay the same

// The function below has a `Linear runtime`
// In bigO Notation this is written as: "O (n)" (pronunced Oh of N)
// As the input size increases the runtime will increase too
// if there are 50 elements in the array we have to perform 50 operations
function printAll(array) {
  for(let i = 0; i < array.length; i++) {
    console.log(i, array[i])
  }
}
printAll(new Array(50))

// The function below has an `exponential runtime`
// In bigO Notation this is written as: "O (n^2)" (pronunced Oh of N square)
// It iterates over the whole array and for every element
// it iterates over the whole array again to make every possible combination
// this is not efficient in terms of performance
// and it should be avoided as your input starts to scale. Avoid as much as possible
function printAndAdd(array) {
  for(let firstIndex = 0; firstIndex < array.length; firstIndex++) {
    for(let secondIndex = 0; secondIndex < array.length; secondIndex++) {
      console.log(firstIndex + secondIndex)
    }
  }
}

console.log('should log 9 pairs')
printAndAdd(['A', 'B', 'C']);  // 9 pairs logged out
console.log('should log 16 pairs')
printAndAdd(['A', 'B', 'C', 'D']);  // 16 pairs logged out
console.log('should log 25 pairs')
printAndAdd(['A', 'B', 'C', 'D', 'E']);  // 25 pairs logged out

// The function below has an `logarithmic runtime`
// In bigO Notation this is written as: "O (log N)" (pronunced Oh of log N)
// This is very performant. An example of very performant algorithm is a binary search

function binarySearch(array, valueToSearch) {
  var low = 0;
  var high = array.length - 1;
  var mid;
  var element;

  while (low <= high) {
    mid = Math.floor((low + high) / 2, 10);
    midElement = array[mid];
    if (midElement < valueToSearch) {
      low = mid + 1;
    } else if (midElement > valueToSearch) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

// When we use built-in JS methods we need to keep in mind the space and time complexity of each method
// Let's have a look at the complexity of each methods

//lookup

arr = [1,2,3,4]
arr[3] // this is a lookup. Complexity is O(1) because we know that the memory worker know how to find this
arr.push(5) // usually is O(1) because we don't need to go through the whole array to push something at the end.
// It's very important to keep in mind that .push() can be a O(n) because JS arrays are dynamic arrays.
// It means that if the memory needs to allocate more memory to expand that array, then it will have to copy-paste that array into the memory slot


// This is how an array in JS is implemented

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  deleteAtIndex(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }
  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    console.log(this.data[this.length - 1]);
    delete this.data[this.length - 1];
    this.length--;
  }
}

const myArray = new MyArray();
myArray.push('hi');
myArray.push('you');
myArray.push('!');
myArray.pop();
myArray.deleteAtIndex(0);
myArray.push('are');
myArray.push('nice');
myArray.shiftItems(0);
console.log(myArray);
