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

const [ ]