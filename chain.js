// data access 
const data = [{id : 1 , name : 'Emon', address: 'Hatirdia'}];
console.log(data[0].name);





const products = {
    count : 5000,
    items : [
        {id : 1 , name : 'iphone', price : '1000'},
        {id : 2 , name : 'macbook', price : '12000'}
    ]
}

console.log(products.items[1].name);



const numbers = [1, 3, 4 ,5 , 6];

const doubled = [];
for (const num of numbers){
    const double = num*2;
    doubled.push(double);
}
console.log(doubled);



// array map
const numbers1 = [10, 30, 40 , 50, 60];
const num1 = n => n * 2 ;

const double1 = numbers1.map(num1);
console.log(double1);




const number2 = [ 2, 3, 4, 5];
const bonus = number2.map(num => num + 10);
console.log(bonus);



// map,foreach,filter,find,reduce

const product = [
    { id: 1, name: 'hp', price: 40000 },
    { id: 2, name: 'dell', price: 45000 },
    { id: 3, name: 'asus', price: 50000 },
    { id: 4, name: 'mac', price: 140000 },
];

// Extracting names
const names = product.map(product => product.name);
console.log(names);  // ['hp', 'dell', 'asus', 'mac']

// Logging IDs using forEach
product.forEach(product => console.log(product.id));  

// Filtering products with price > 50000
const price1 = product.filter(product => product.price > 50000);
console.log(price1);  

// Finding first product with price < 50000
const finds = product.find(p => p.price < 50000);
console.log(finds);  

// Calculating total price using reduce
const total = product.reduce((acum, current) => acum + current.price, 0);
console.log(total);  // 275000
