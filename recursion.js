const factorial = (num) => num === 1 ? num : num * factorial(num - 1)
// The main idea is that a recursive function will continue to call itself
// until the base case is satisfied.
// In this specific case, the facotrial function would still work if you set the base case to
// any number less than or equal to 2 instead of 1 because multiplying by 1 in our last call to our factorial function
// is unnecessary since anything times 1 is just itself.
// So doing this would essentially stop our factorial function from being called with the value 1 as num
// which is better for larger inputs

// Another example of recursion is the fibonacci series.
// Problem: Given a number N return the index value of the Fibonacci sequence, where the sequence is:
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
// that the pattern of the sequence is that each value is the sum of the 2 previous values,
// that means that for N=5 → 2+3 or in maths: F(n) = F(n-1) + F(n-2)

const fibonacci = (num) => {
  if (num <= 1) {
    return 1
  }
  return fibonacci(num - 1) + fibonacci(num - 2)
}

console.log(fibonacci(8))


function diagonalDifference(arr) {
  const matrixLength = arr.length
  let sumDiagonal1 = 0
  let sumDiagonal2 = 0
  for(let i = 0; i < matrixLength; i++){
    sumDiagonal1 += arr[i][i]
    sumDiagonal2 += arr[i][matrixLength - i - 1]
  }
  console.log(sumDiagonal1)
  console.log(sumDiagonal2)
  return Math.abs(sumDiagonal1 - sumDiagonal2)
}

function superDigit(n, k) {
  console.log(n, k)
  const arr = n.repeat(k).split("")
  console.log(arr)
  const sum = arr.reduce((acc, num) => Number(acc) + Number(num)).toString()
  console.log(sum)
  if (sum.length === 1) {
      console.log('thats it!')
      return sum
  }
  else {
      console.log('about to call superDigit again')
      return superDigit(sum, 1)
  }
}
