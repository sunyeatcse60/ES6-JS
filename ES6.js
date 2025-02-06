const money = 25;
const rich = money + 25;
console.log(rich);


let count = 0;
count = count + 10;
console.log(count);



const numbers = [1, 2, 3, 4, 5, 6];
numbers[0] = 99;
console.log(numbers);



function add(num1, num2) {
    const result = num1 + num2;
    console.log(num1, num2, result);
    return result;
};
const sum = add(10, 20);



// Templete string
const a = 100;
const b = 200;
const result = `The sum of ${a} and ${b} is ${a + b}`;
console.log(result);



function  remove(a , b){
    return a - b ;
}
const res = remove(10, 5);
console.log(res);



// large arrow function

const largeArrow = (a, b, c) => {
    const sum = a + b + c;
    const sub = a - b - c;
    const mul = a * b * c;
    const result = sum + sub + mul ;
    return result;
}
const value = largeArrow( 5, 10, 8);
console.log(value);






const max = Math.max(4, 5, 5 , 6 ,76 , 77, 56)
console.log(max);


const number = [3, 4, 5, 77, 78, 99, 456]
const arryMax = Math.max(...number);
console.log(arryMax);





// Advanced object and array destructure


const actor = {
    name : 'Anonto',
    age : '40',
    phone : '01726',
    money : '10,00,000'
}

// console.log(actor.phone);
const {name} = actor;
console.log(name);


// for of / for in example

const numb = [1,2,3,4,5,6,7,8,9];
for (const num of numb){
    console.log(num);
}



