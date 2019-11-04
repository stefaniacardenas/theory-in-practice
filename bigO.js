// Big O notation
// Big O notation allow us to determine how scalable an algorithm is.
// How long it takes for an algorithm to complete as its input size increases
// It allows us to predict the worst case scenario completion time of an algorithm
// based on the input size

// The function below has a `Constant runtime`
// In bigO Notation this is written as: "O (1)" (pronunced Oh of one)
// It doesn't matter if the array has 5 or 5000 elements, it will always take the same time to run
function log(array) {
  // this function will always log
  // the first two elements of an array
  console.log(array[0])
  console.log(array[1])
}
log([1,2,3,4,5])
log(new Array(50))
// time is the x axis, while input size is the y axis.
// if y grows time will stay the same

// The function below has a `linear runtime`
// In bigO Notation this is written as: "O (n)" (pronunced Oh of N)
// As the input size increases the runtime will increase too
// if there are 50 elements in the array we have to perform 50 operations
function logAll(array) {
  for(let i = 0; i < array.length; i++) {
    console.log(i, array[i])
  }
}
logAll(new Array(50))

// The function below has an `exponential runtime`
// In bigO Notation this is written as: "O (n^2)" (pronunced Oh of N square)
// It iterates over the whole array and for every element
// it iterates over the whole array again to make every possible combination
// this is not efficient in terms of performance
// and it should be avoided as your input starts to scale. Avoid as much as possible
function logAndAdd(array) {
  for(let firstIndex = 0; firstIndex < array.length; firstIndex++) {
    for(let secondIndex = 0; secondIndex < array.length; secondIndex++) {
      console.log(firstIndex + secondIndex)
    }
  }
}

console.log('should log 9 pairs')
addAndLog(['A', 'B', 'C']);  // 9 pairs logged out
console.log('should log 16 pairs')
addAndLog(['A', 'B', 'C', 'D']);  // 16 pairs logged out
console.log('should log 25 pairs')
addAndLog(['A', 'B', 'C', 'D', 'E']);  // 25 pairs logged out

// The function below has an `logarithmic runtime`
// In bigO Notation this is written as: "O (log N)" (pronunced Oh of log N)
// This is very performant. An example of very performant algorithm is a binary search

function binarySearch(array, value) {

}
