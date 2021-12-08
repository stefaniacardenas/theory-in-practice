
function mergeSortedArrays(arr1, arr2) {
  let merged = [];
  let index1 = 0;
  let index2 = 0;

  while (merged.length < (arr1.length + arr2.length) ) {
    let isArr1Done = index1 >= arr1.length
    let isArr2Done = index2 >= arr2.length

    if (!isArr1Done && (isArr2Done || (arr1[index1] < arr2[index2]))) {
      merged.push(arr1[index1])
      index1++
    } else {
      merged.push(arr2[index2])
      index2++
    }
  }
  return merged
}


var merge = function(nums1, m, nums2, n) {
    // m === nums1.length - num2.length
    // n === num2.length
    // n is the end of valid numbers in nums2
    // we want to start from the end of nums1
    // i and j are the indeces of elements we want to compare
    let i = m - 1
    let j = n - 1
    let currentPositionInNums1 = nums1.length - 1

    while (currentPositionInNums1 >= 0) {
        // if we've gone through all the numbers in nums1
        if (i < 0) {
            // push the current nums2 element in the current position in nums1
            nums1[currentPositionInNums1] = nums2[j]
            j--
        }
        // if we've gone through all the numbers in nums2
        else if (j < 0 ) {
            // push the current nums1 element in the current position in nums1
            nums1[currentPositionInNums1] = nums1[i]
            i--
        }
        else {
            if (nums1[i] > nums2[j]) {
                nums1[currentPositionInNums1] = nums1[i]
                i--
            }
            else {
                nums1[currentPositionInNums1] = nums2[j]
                j--
            }
        }
        currentPositionInNums1--
    }
};

module.exports = mergeSortedArrays;
