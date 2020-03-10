// Given a string Sting="ABCSC" check whether it contains a substring "ABC".
//
// 1)If no , return "-1".
// 2)If yes , remove the substring from string and return "SC".


const findSubstring = (str, subStr) =>
  str && str.indexOf(subStr) !== -1 ? str.replace(subStr, "") : -1
