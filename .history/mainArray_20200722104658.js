const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const newArray = arr.map(function(value, index) {
  return value * 2;
})

console.log(newArray);