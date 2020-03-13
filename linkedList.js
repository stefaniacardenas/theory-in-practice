// Linked list

// A Linked list is a list of elements called nodes that are connected together
// or linked together in a single file
// There are two types of linked lists: a singly linked list and a double linked list
// In a singly linked list each node only has reference to the node after it or the next node.
// In a doubly linked list each node has a reference to the next node and the one before.
// The linked list itself as a whole only needs to know about two nodes to function correctly:
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
// Let's create a method to add elements at the beginning of the list
// The prototype object is simply an object that multiple other objects
// can refer to to get any information or functionality that they need.
// In our case, each of our constructor functions will have a prototype
// and all their instances will be able to refer to it.
LinkedList.prototype.addToHead = function(value) {
  // we need to create a new node with its value. This node will be the new head
  // therefore the current head will become the next node.
  // The previous element will always be null because this is the first element
  const newNode = new Node(value, this.head, null)
  // if a node already exists
  if (this.head) {
    // the new node will become the previous node in releation to the current head.
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
  // Same here but in this case the next value will always be null because the new node will be the last element
  // The current tail will be come the prev in relation to the new node
  const newNode = new Node(value, null, this.tail)
  if (this.tail) {
    // current tail must know who next node is. It must be aware that the new node it's its next
    this.tail.next = newNode
  }
  else {
    // if there is no tail it means no head is present either so this node becomes
    // both the head and the tail
    this.head = newNode
  }
  // the new node is assigned as the tail
  this.tail = newNode
}
console.log("//////////// Add to head and add to tail ////////////////")
const ll = new LinkedList()
ll.addToHead(100)
ll.addToTail(1000) // this is the last element
ll.addToHead(200)
ll.addToHead(300) // this is the first element
console.log(ll)
console.log(ll.tail.prev.prev.prev) // this will log out the head 300

// Remove the head and return its value
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
console.log("//////////// Remove head and remove tail ////////////////")
console.log('this is the current head', ll.head )
console.log('now we will remove it ')
const removedHead = ll.removeHead()
console.log('the value of the previous head was', removedHead )
console.log('the head is now', ll.head )

// Let's remove the tail
LinkedList.prototype.removeTail = function() {
  if (!this.tail) return null;
  const tailVal = this.tail.value
  this.tail = this.tail.prev
  if (this.tail) {
    this.tail.next = null
  }
  else {
    // if there is no tail at this point then there is no head either cause the elements are finished
    // so let's reset the head to null
    this.head = null
  }
  // now return the value of the tail that we removed
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
console.log("//////////// Search through linked list ////////////////")
LinkedList.prototype.search = function(searchValue) {
  // take in the search value and check if that data resides in the linked list
  // if it does not exist, this function will return `null`
  // if it does exist, this function will return the value
  let currentNode = this.head
  // while(condition) runs till the condition in the parenthesis becomes true
  // this will run until currentNode exist
  // At the end of the list currentNode will be false and the while loop will stop
  while(currentNode) {
    if (currentNode.value === searchValue) return currentNode.value;
    currentNode = currentNode.next
  }
  return null
}

const anotherLL = new LinkedList()
anotherLL.addToHead(1)
anotherLL.addToHead(2)
anotherLL.addToTail(3)
anotherLL.addToTail(4)
anotherLL.addToTail(3)
const searchedValue = anotherLL.search(3)
console.log(searchedValue)

// Find the indexes of a node value
LinkedList.prototype.indexOf = function (value) {
  let currentNode = this.head
  let indexes = []
  let index = 0
  // while(condition) runs till the condition in the parenthesis becomes true
  // this will run until currentNode exist
  // At the end of the list currentNode will be false and the while loop will stop
  // meanwhile we increase the current index by one at each iteration and
  // store the indexes of the node values that match our search
  while(currentNode) {
    if (currentNode.value === value) {
      indexes.push(index)
    }
    currentNode = currentNode.next
    index++
  }
  return indexes
};

const indexesInLinkedList = anotherLL.indexOf(10)
console.log('Indexes of nodes with value 3', indexesInLinkedList)


// Performance
// Linked Lists have a constant runtime "O (1)" for adding or removing nodes from the head and tail
// This is because we have the head and tail pointers so we never have to iterate
// over the whole list to find head and tail.
// Searching a linked list can be done in a linear runtime "O (n)" because
// we might still need to iterate over the whole linked list to find an element.
// So as our linked list grows in size, the time that it takes to run our search function
// will grow proportionally
// All of that is still an acceptable and efficient time complexity.
// So linked lists are rather performant in nature.

// Practical uses
// - Online gaming
// - Poker, board game

// Important!
// Linked list are a good data structure to use in lower level languages
// that actually deal with memory management (which you won't actually have to deal with in Javascript).

// Linked lists are ideal in languages that deal with physical memory space on your hard drive
// because they allow you to break up a lot of data into little pieces that can
// be spread across different areas and they don't necessarily have to be stored together.
// You can store this data in different places because each nodes holds the reference
// to its next and previous node


// Let's create a singly LinkedList

class SinglyNode {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class SinglyLinkedList {
  constructor(value) {
    // this will be the head
    this.head = {
      value,
      next: null
    }
    this.tail = this.head
    this.length = 1
  }

  append(value) {
    const newNode = new SinglyNode(value)
    this.tail.next = newNode
    this.tail = newNode
    this.length++
    return this
  }

  prepend(value) {
    const newNode = new SinglyNode(value)
    newNode.next = this.head
    this.head = newNode
    this.length++
    return this
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value)
    }
    if (index === 0) {
      return this.prepend(value)
    }
    const newNode = new SinglyNode(value)
    let prevNode = this.traverseList(index - 1)
    newNode.next = prevNode.next
    prevNode.next = newNode
    this.length++
    return this
  }

  traverseList(index) {
    let counter = 0
    let currentNode = this.head
    while(counter !== index) {
      currentNode = currentNode.next
      counter++
    }
    return currentNode
  }

  printList() {
    const nodesArray = []
    let currentNode = this.head
    while(currentNode !== null) {
      nodesArray.push(currentNode.value)
      currentNode = currentNode.next
    }
    console.log('current nodes values', nodesArray)
  }
}

const mySinglyLinkedList = new SinglyLinkedList(10)
mySinglyLinkedList.append(5)
mySinglyLinkedList.append(16)

console.log(mySinglyLinkedList)
mySinglyLinkedList.prepend(7)
console.log(mySinglyLinkedList)
mySinglyLinkedList.insert(2, 900)
console.log(mySinglyLinkedList.head.next.next)
mySinglyLinkedList.printList()
