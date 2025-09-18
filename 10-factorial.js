const arg = process.argv[2];
const n = parseInt(arg);

function factorial(x) {
  if (x <= 1) return 1;
  return x * factorial(x - 1);
}

if (isNaN(n)) {
  console.log(1);
} else {
  console.log(factorial(n));
}
