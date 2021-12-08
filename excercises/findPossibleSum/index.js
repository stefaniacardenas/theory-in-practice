// const arr1 = [1,2,3,9] // false
// const arr2 = [1,2,4,4] // true
//
// const sum1 = 8
// const sum2 = 8

// [integer]
// output = boolean

// time complexity

// function that takes an array and takes a sum
//are the numbers are sorted ?

// this is O(n) - linear

function findPairsWithSum(arr, sum) {
  let possiblePairs = {}
  for (let i=0; i < arr.length; i++) {
    if (possiblePairs[arr[i]]) {
      return true
    }
    if (arr[i] < sum ) {
      possiblePairs[sum - arr[i]] = true
    }
  }
  return false
}

function findPairsWithSum1(arr, sum) {
  let found = false
  arr.reduce((possiblePairs, num) => {
    if (possiblePairs[num]) {
      found = true
    }
    if (num < sum) {
      possiblePairs[sum - num] = true
    }
    return possiblePairs
  }, {})
  return found
}

function twoSum(nums, target) {
  let complements = {}
  for (let i = 0; i< nums.length; i++) {
    let currentEl = nums[i]
    let currentDifference = target - currentEl
    if (complements[currentEl] === 0 || complements[currentEl] ) {
      return [complements[currentEl] , i]
    }
    complements[currentDifference] = i
  }
  return []
};

module.exports = {
  findPairsWithSum,
  findPairsWithSum1,
  twoSum
}
