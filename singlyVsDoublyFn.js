// create a function that can be singly or doubly invoked

function getTotal() {
  const args = Array.prototype.slice.call(arguments)
  const reducer = (acc, num) => acc + num
  console.log(args)
  if (args.length > 1) {
    return args.reduce(reducer)
  }
  else if (args.length === 1) {
    return function(...newArgs) {
      return newArgs.reduce(reducer, args[0])
    }
  }
}

console.log('first invocation',getTotal(10, 20, 30))
console.log('second invocation',getTotal(10)(20))
