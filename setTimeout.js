console.log('I');

console.log('Love');

setTimeout (() => {
    console.log('Brishty');
}, 200);

console.log('You');


// setinterval

let num = 0;
const clockid = setInterval(() => {
    num ++;
    console.log(num);
    if(num >= 10){
        setInterval(clockid);
    }  
}, 2000);