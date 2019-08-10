// What is a closure?

// A closure is an inner function that has access to the scope of its enclosing functions
// It has access to variables in 3 scopes:
// - it's own scope
// - it's parent scope
// - the global scope


const globalVar = 'I am GLOBAL'

const enclosingFunction = () => {
  const parentVar = "I am part of parent scope"
  const myClosure = () => {
    // this variable is protected from the global scope
    const privateVar = 'This is only available here'
    console.log("I know about globalVar", globalVar)
    console.log("I know about parentVar", parentVar)
    console.log("I know about privateVar", privateVar)
  }
  myClosure()
}

enclosingFunction()
