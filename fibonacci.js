//Fibonacci Sequence

const fibonacci = function(num) {
  const allFibs = [];
  if(num < 2) {
    allFibs.push(0);
  } else {
    let prev = 0;
    let curr = 1;
    allFibs.push(prev, curr);
    for(let i = 0; i < num; i++) {
      const next = prev + curr;
      prev = curr;
      curr = next;
      allFibs.push(next);
    }
  }
console.log(allFibs);
};

fibonacci(10);