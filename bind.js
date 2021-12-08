// The bind functions allows you to bind a function to a certain this context
// it also allows you to pass additional arguments

this.distance = 10000;
const roadTrip1 = {
  distance: 3000,
  getDistance: function(unit, caption) {
    return this.distance + unit + caption;
  }
};

const myFirstTripDistance = roadTrip1.getDistance.bind(roadTrip1, 'km');
// we need to bind this function to roadTrip1 otherwise this.distance
// will be fetched from the global scope and would return 10000
console.log(myFirstTripDistance(' left to go'))

const roadTrip2 = {
  distance: 5000
};

// Here I want to pass a different context every time
const getTripDistance = (ctx) => roadTrip1.getDistance.bind(ctx, 'km');
// I need to curry it otherwise it will return [Function: bound getDistance]
console.log(getTripDistance(roadTrip2)(' left to go'))
console.log(getTripDistance(roadTrip1)(' left to go'))


// Now if you use an arrow function the result will be different
const roadTrip3 = {
  distance: 7000,
  getDistance: () => {
    return this.distance;
  }
}
const newDistance = roadTrip3.getDistance.bind(roadTrip3);
console.log(newDistance()); // will return 10000

// This is because arrow function share the this keyword with its parent scope.
// In this case, that’s the global object.
// So arrow functions are unusable for object methods!

const account1 = {
  name: 'Jen',
  totalAmount: 5000,
  deductAmount: function(amount) {
    this.totalAmount -= amount;
    return 'Amount in account: ' + this.totalAmount;
  },
};

const account2 = {
  name: 'James',
  totalAmount: 8000,
};

const withdrawFromAccount = function(amount) {
  return account1.deductAmount.bind(account2, amount);
};

console.log(withdrawFromAccount(500)()); // this will return 7500
console.log(withdrawFromAccount(200)()); // this will return 7300