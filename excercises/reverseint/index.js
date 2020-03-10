// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  if (!n || typeof(n) !== "number") return 0 // handle
  const reversedString = n.toString().split("").reduce((previousValue, currentValue) =>
    currentValue + previousValue // remember, with negative numbers this will have the - at the end of the string!
  )
  // parseInt is able to convert the string to a number
  // even if the string includes characters different than a number
  // then we have to make sure that if n was a negative number to return a reversed negative numer
  // Math.sign(n) will return -1 for negatives and 1 for positives.
  // So multiplying by -1 or 1 will return a negative or a positive.
  return parseInt(reversedString, 10) * Math.sign(n)
}

module.exports = reverseInt;
