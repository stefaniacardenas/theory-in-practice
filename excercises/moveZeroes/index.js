// Apporach 1
var moveZeroes = function(nums) {
    let amountOfZeroes = 0

    for (let i = 0; i < nums.length; i++) {
        if(nums[i] === 0) {
          amountOfZeroes++
        } else {
            let temp = nums[i]
            nums[i] = 0
            nums[i-amountOfZeroes] = temp
        }
    }
    return nums
}


// approach 2 
const moveZerosWithTwoPointers = (nums) => {
  let zeroCount = 0
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) {
          nums[zeroCount] = nums[i]
          zeroCount++
      }
  }
  for (let j = zeroCount; j < nums.length; j++) {
      nums[j] = 0
  }
  return nums
}

module.exports = moveZeroes;
