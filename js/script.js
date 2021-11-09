// Task 1
function getFactorial(n) {
    if (n === 1 || n === 0) {
      return 1;
  } else {
      return n * getFactorial(n - 1);
  }
} 
console.log(getFactorial(3));

// Task 2
function getPow(num,degree) {
  if (degree === 1) {
      return num;
  } else {
    return num * (getPow(num,degree - 1));
  }
}
console.log(getPow(2,4));

// Task 3
function sum(a, b) {
  if (b === 0) {
      return a;
  } else {
      return sum(a + 1, b - 1);
  }     
}

console.log(sum(5, 8));
