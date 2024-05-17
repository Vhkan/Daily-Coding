//Fibonacci Sequence Version 2
const fibonacci = function(num) {
  const allFibs = [];
  for (let i = 0; i < num; i++) {
    if (allFibs[i - 2] && allFibs[i - 1]) {
      let newFib = allFibs[i - 2] + allFibs[i - 1];
      allFibs.push(newFib); 
    } else {
      allFibs.push(i);
    }
  }
  return allFibs;
};

console.log(fibonacci(10));