// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let chars = {}
  let foundNTimes = 0
  let mostUsedChar = ''

  for (let char of str) {
    chars[char] = chars[char] + 1 || 1
  }
  for (let char in chars) {
    if (chars[char] > foundNTimes) {
      foundNTimes = chars[char]
      mostUsedChar = char
    }
  }
  return mostUsedChar
}

module.exports = maxChar;
