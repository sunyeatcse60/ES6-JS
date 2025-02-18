const user = { name: 'Emon', Age: '22', Job: 'Sports Person'};
const stringified = JSON.stringify(user);
const parseStringified = JSON.parse(stringified);

console.log(user);
console.log(stringified);
console.log(parseStringified);