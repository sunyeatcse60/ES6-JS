const x = false;
if(x == 'false'){
    console.log('Value of x is true');
}
else{
    console.log('Value of x is false');
}





const y = ' ';

if(y){
    console.log('Value of x is true');
}
else{
    console.log('Value of x is false');
}




// == and === concept

const first = 2 ;
const second = '2' ;

if (first == second){
    console.log('Value is equal');
}
else{
    console.log('Value is not equal');
} 



// scope 

function add(a,b){
    const result = a + b;
    console.log(a , b);
    return result;

}

add(5,6);


// hoisting   var usre korta hoibo
for (var i = 0 ; i < 5 ; i++){
    console.log(i);

}
console.log('Outside',i);