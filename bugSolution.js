function foo(a, b) {
  // Use nullish coalescing to replace null with 0
  a ??= 0;  
  b ??= 0;
  return a + b; 
}
console.log(foo(null, 1)); // Output: 1
console.log(foo(1, null)); //Output: 1
console.log(foo(1,2)); // Output: 3
console.log(foo(null, null)); //Output: 0