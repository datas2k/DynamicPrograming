const fib_brute = (n) => {
  if (n <=2) return 1;
  return fib_brute(n-1) + fib_brute(n-2);
};

const fib_memo = (n,memo = {}) => {
  if (n in memo) return memo[n];
  if (n <=2) return 1;
  memo[n] = fib_memo(n-1, memo) + fib_memo(n-2,memo);
  return memo[n];
};

console.log(fib_brute(2));
console.log(fib_brute(7));
console.log(fib_brute(8));
console.log(fib_memo(7388)); // top of the stack