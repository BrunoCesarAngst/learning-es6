const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const newArray = arr.map(function(value, index) {
  return value + index;
})

console.log(newArray);

const sum = arr.reduce(fun(total, next) {
  return total + next;
}