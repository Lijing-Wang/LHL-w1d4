var array = [Infinity, 100, Infinity];

// console.log(typeof + Infinity);

array.sort(function(a, b){
  return a - b;
});

console.log(array);