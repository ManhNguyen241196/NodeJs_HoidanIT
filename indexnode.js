// const message = require('./myscriptnode')
// console.log(message);
// console.log(require);

const counterObject = require('./myscriptnode');

console.log(counterObject.getCounter())
counterObject.incrementCounter()
console.log(counterObject.getCounter())

const newCounter =  require('./myscriptnode');

console.log(newCounter.getCounter())
