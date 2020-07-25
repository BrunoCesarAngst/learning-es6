// Rest

const user = {
  name: 'Bruno',
  age: 37,
  address: {
    city: 'Arroio do Sal',
    state: 'RS'
  }
}

const { nome, ...rest } = user;

console.log(name);
console.log(rest);