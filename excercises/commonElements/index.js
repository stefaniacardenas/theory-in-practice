// Find common elements in Array
// Should return true or false


// approach 1 - O(n^2) -  quadratic complexity, bad!

function hasCommonElements1(arr1, arr2) {
  for (let el of arr1) {
    if (arr2.includes(el)) {
      return true
    }
  }
  return false
}


// ES6 approach - more readable but still O(n^2)
function hasCommonElements2(arr1, arr2) {
  return arr1.some(item => arr2.includes(item))
}


// approach 2 - same as before, just different loops - O(n^2) -  quadratic complexity, bad!

const hasCommonElements3 = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    for (let j=0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) return true
    }
  }
  return false
}


// approach 3 - this is O(n + n) which is basically O(n)
const hasCommonElements4 = (arr1, arr2) => {
  // convert array to object - O(n)
  const obj1 = arr1.reduce((futureObject, currentValue) => {
    futureObject[currentValue] = true
    return futureObject
  }, {})
  // loop over arr2 and return true if object key exists - O(n)
  for (let i=0; i < arr2.length; i++) {
    if (obj1[arr2[i]]) return true
  }
  return false
}


module.exports = {
  hasCommonElements1,
  hasCommonElements2,
  hasCommonElements3,
  hasCommonElements4
}
