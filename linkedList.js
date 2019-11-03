// Linked list

//A Linked list is a list of elements called nodes that are connected together
// or linked together in a single file
// There are two types of linked lists: a singly linked list and a double linked list
// In a single linked list each node only has reference to the node after it or the next node
// In a doubly linked list each node has a reference to the next node and the one before
// the linked list itself as a whole only needs to know about two nodes to function correctly.
// The head node (first element) and the tail node (last element) and it keeps a reference to these nodes
// by using two pointers called the head pointer and the tail pointer

function LinkedList() {
  this.head = null
  this.tail = null
}

function Node(value, next, prev) {
  this.value = value
  this.next = next
  this.prev = prev
}
// let's create a method to add element at the beginning of the list
// The prototype object is simply an object that multiple other objects
// can refer to to get any information or functionality that they need.
// In our case, each of our constructor functions will have a prototype.
// Are all their instances will be able to refer to it.
LinkedList.prototype.addToHead = function(value) {
  // we need to create a new node with its value. This node will be the new head
  // therefore the current head will be next. Pervious is always null because this is the first element
  const newNode = new Node(value, this.head, null)
  // if a node already exists
  if (this.head) {
    // the new node becomes the previous of the current head.
    // newNode becomes the first element
    this.head.prev = newNode
  }
  else {
    // if no node are present the new node is both the head and the tail
    this.tail = newNode
  }
  // in any case the new node will be the new head
  this.head = newNode
}

LinkedList.prototype.addToTail = function(value) {
  const newNode = new Node(value, null, this.tail)
  if (this.tail) {
    // new node becomes the last element
    this.tail.next = newNode
  }
  else {
    // if there is no tail it mean no head is present either so this node becomes
    // both the head and the tail
    this.head = newNode
  }
  this.tail = newNode
}

const ll = new LinkedList()
ll.addToHead(100)
ll.addToTail(1000) // this is the last element
ll.addToHead(200)
ll.addToHead(300) // this is the first element
console.log(ll)
console.log(ll.tail.prev.prev.prev) // this will log out the head 300

// remove the head and return its value
LinkedList.prototype.removeHead = function() {
  // if these is no head return null value
  if (!this.head) return null;
  // if there is a head lets store its value into a variable before we remove the node
  const val = this.head.value
  // now let's make the next node the current head
  this.head = this.head.next
  // if a head is present, let's set its previous value to null as this is now the first element
  if (this.head) {
    this.head.prev = null
  }
  // if these is no head it means there is no next, so no tail, it means that all the elements have finished
  else {
    // so we need to reset the tail to null
    this.tail = null
  }
  // now let's return the value of the head that was removed from the LinkedList
  return val
}
console.log('this is the current head', ll.head )
console.log('now we will remove it ')
const removedHead = ll.removeHead()
console.log('the value of the previous head was', removedHead )
console.log('the head is now', ll.head )

LinkedList.prototype.removeTail = function() {
  if (!this.tail) return null;
  const tailVal = this.tail.value
  this.tail = this.tail.prev
  if (this.tail) {
    this.tail.next = null
  }
  else {
    // if there is no tail at this point then there is no head either cause the elements are finished
    // so let's reset to null
    this.head = null
  }
  return tailVal
}

const newLL = new LinkedList()
newLL.addToTail('hello') // this is the last element
newLL.addToHead('ciao')
newLL.addToHead('hola') // this is the first element
console.log('current tail',newLL.tail)
const removedTail = newLL.removeTail()
console.log('value of removed tail', removedTail)
console.log('the new tail is', newLL.tail)

// Search through a linked list
