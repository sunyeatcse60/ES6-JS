function kitchan (){
    let rost = 0;
    return function(){
        rost ++;
        return rost;
    }
}

const firstServer = kitchan();
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());


// function greeting (person){
//     console.log(person);
// }
// greeting('Emon');






// handelar

function greeting(greetingHandler , name){
    greetingHandler(name);
}

function greetingHandler(name){
    console.log('How are you?', name);
}

function goodNight(name){
    console.log('Good night', name);
}

greeting(greetingHandler, 'Emon');
greeting(goodNight, 'Brishty');