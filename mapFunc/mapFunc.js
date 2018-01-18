var words = ["ground", "control", "to", "major", "tom"];

var map = function(arr, change){
  var newArr = [];
  arr.forEach(function(word){
    newArr.push(change(word));
  });
  return newArr;
};

var newwords = map(words, function(word) {
  return word.length;
});
console.log(newwords);
var newwords = map(words, function(word) {
  return word.toUpperCase();
});
console.log(newwords);

var newwords = map(words, function(word) {
  return word.split('').reverse().join('');
});
console.log(newwords);

