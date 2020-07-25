// Rest

const user = {
  name: 'Bruno',
  age: 37,
  address: {
    city: 'Arroio do Sal',
    state: 'RS'
  }
}

const { name, ...rest } = user;

console.log(name);
console.log(rest);

const arr = [1, 2, 3, 4, 5];
const [ a, b, ...c ] = arr;
console.log(a);
console.log(b);
console.log(c);

function sum(...params) {
  return params.reduce((acc, curr) => acc + curr);
}
console.log(sum(1, 2, 3, 4, 5));

function remaining(a, b, ...params) {
  return params;
}
console.log(remaining(1, 2, 3, 4, 5));

// Spread

const arr1 = [1, 2, 3];
const arr2 = [5, 6, 7];

const arr3 = [...arr1, ...arr2];
console.log(arr3);

