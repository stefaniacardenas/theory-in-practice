const factorial = (num) => num === 1 ? num : num * factorial(num - 1)
// The main idea is that a recursive function will continue to call itself
// until the base case is satisfied.
// In this specific case, the facotrial function would still work if you set the base case to
// any number less than or equal to 2 instead of 1 because multiplying by 1 in our last call to our factorial function
// is unnecessary since anything times 1 is just itself.
// So doing this would essentially stop our factorial function from being called with the value 1 as num
// which is better for larger inputs
