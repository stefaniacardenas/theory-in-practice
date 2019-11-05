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
