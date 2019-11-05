// This is a stack question with Last In First Out behaviour

function balancedParentheses(s) {
  const arr = s.split("")
  const opening = ['[', '{', '(']
  const closing = [']', '}', ')']
  const stack = []
  for(let i=0; i< arr.length; i++) {
    const element = arr[i]
    if (opening.includes(element)) {
      stack.push(element)
    }
    else if (closing.includes(element)) {
      if (closing.indexOf(element) === opening.indexOf(stack[stack.length - 1])) {
        stack.pop()
      }
      else {
        return 'NO'
      }
    }
  }
  if (stack.length ) {
    return 'NO'
  }
  return 'YES'
}


// Simplified Version

function isBalanced(s) {
  const arr = s.split("")
  const stack = []
  for(let i=0; i< arr.length; i++) {
    const element = arr[i]
    if ( element === '{') {
      stack.push(element)
    }
    else if (element === '}') {
      if (stack[stack.length - 1] === "{") {
        stack.pop()
      }
      else {
        return 'NO'
      }
    }
  }
  if (stack.length ) {
    return 'NO'
  }
  return 'YES'
}
