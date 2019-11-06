// the binary search tree

function BST(value) {
  this.value = value
  this.left = null
  this.right = null
}

BST.prototype.insert= function(value) {
  if (value <= this.value) {
    this.left ? this.left.insert(value) : this.left = new BST(value)
  }
  else if (value > this.value) {
    this.right ? this.right.insert(value) : this.right = new BST(value)
  }
}

// root BST
const bst = new BST(50)

bst.insert(30)
bst.insert(70)
bst.insert(100)
bst.insert(60)
bst.insert(80)
bst.insert(10)
bst.insert(40)
bst.insert(110)
bst.insert(20)
bst.insert(1)
bst.insert(90)
bst.insert(200)

console.log(bst.left.left)
console.log(bst.right.right)

// this would log out
// BST {
//   value: 10,
//   left: BST { value: 1, left: null, right: null },
//   right: BST { value: 20, left: null, right: null } }
// BST {
//   value: 100,
//   left:
//    BST {
//      value: 80,
//      left: null,
//      right: BST { value: 90, left: null, right: null } },
//   right:
//    BST {
//      value: 110,
//      left: null,
//      right: BST { value: 200, left: null, right: null } } }

BST.prototype.contains = function(value) {
  if (value === this.value) return true
  else if (value < this.value) {
    if (!this.left) return false
    return this.left.contains(value)
  }
  else if (value > this.value) {
    if (!this.right) return false
    return this.right.contains(value)
  }
}

console.log('Does contain 50?', bst.contains(50))
console.log('Does contain 110?', bst.contains(110))
console.log('Does contain 2?', bst.contains(2))

// Output
// Does contain 50? true
// Does contain 110? true
// Does contain 2? false

// this method accepts a function
// This is the "In-Order" version of depthFirstTraversal
// This is the most used version of the depthFirstTraversal.
// It touches every node starting from the left node of each node, the goes to the parent, then to the right one
BST.prototype.depthFirstTraversal = function(iteratorFunction) {
  if (this.left) this.left.depthFirstTraversal(iteratorFunction)
  iteratorFunction(this.value)
  if (this.right) this.right.depthFirstTraversal(iteratorFunction)
}
bst.depthFirstTraversal((value) => console.log(value))

// this will log all the values in our tree in order!
// Output
// 1
// 10
// 20
// 30
// 40
// 50
// 60
// 70
// 80
// 90
// 100
// 110
// 200


// Here is an improved version of the function above that will console.log the binary search tree nodes based on the order 
BST.prototype.depthFirstTraversalWithOrder = function(iteratorFunction, order) {
  if (order === 'pre-order') iteratorFunction(this.value) // if pre-order the root/father will be logged first
  if (this.left) this.left.depthFirstTraversalWithOrder(iteratorFunction, order)
  if (order === 'in-order') iteratorFunction(this.value) // if pre-order the root/father will be logged after recursively running the left nodes. After the root node recursively do its right node
  if (this.right) this.right.depthFirstTraversalWithOrder(iteratorFunction, order)
  if (order === 'post-order') iteratorFunction(this.value) // if post-order the root/father will be logged last! It will execute left and right first, then the father
}

console.log('Traversing Depth First - In-Order')
bst.depthFirstTraversalWithOrder((value) => console.log(value), 'in-order')
// In-order will return the same output as before
// Output
// 1
// 10
// 20
// 30
// 40
// 50
// 60
// 70
// 80
// 90
// 100
// 110
// 200

console.log('Traversing Depth First - Pre-Order')
bst.depthFirstTraversalWithOrder((value) => console.log(value), 'pre-order')
// Pre-order will return the nodes from the root node to the each left node then all the right nodes of each node
// This can be useful when you want to duplicate the whole tree
// Output
// 50 // this is the root node
// 30 // this is left of the root node
// 10 // this is left node of 30
// 1 // this is the left node of 10
// 20 // this is the right node of 10
// 40 // this is the right node of 30
// 70 // this is the right node of 50
// 60 // this is the left node of 70
// 100 // this is the right node of 70
// 80 // this is the left node of 100
// 90 // this is the right node of 80
// 110 // this the right node of 90
// 200 // is the right node of 110


console.log('Traversing Depth First - Post-Order')
bst.depthFirstTraversalWithOrder((value) => console.log(value), 'post-order')


// And here is a small reproduction of the binary search tree! O_o
/* 
                   50
                /     \ 
              30       70
              / \     / \
            10  40  60   100
            / \          /  \
          1   20        80  110
                       /  \   \
                          90   200

*/