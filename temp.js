// Promise example
// const sleep = (interval) => {
//   return new Promise((resolve, reject) => {
//     if (isNaN(interval)) {
//       reject('Interval must be a number');
//     }
//     setTimeout(() => resolve('Wakeup after ' + interval + ' ms'), interval);
//   });
// };

// sleep(1000)
//   .then((message) => console.log(message))
//   .catch((e) => console.error(e))
//   .finally(() => console.log('The END whether resolved or rejected!'));
// console.log('Sleep');

// Partial application example
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
const partial = (fn, ...args) => {
  return (...rest) => {
    return fn(...args, ...rest);
  };
};
const add1 = partial(add, 1);
const multiplyBy1 = partial(multiply, 1);
const output = (add1, multiplyBy1) => {
  return add1 + multiplyBy1;
};
console.log(output(add1(10), multiplyBy1(10)));
