const multiplier = 100;

function rand() {
    const decimal = Math.random();
    const times10 = decimal *multiplier;
    const final = Math.floor(times10);
   
    return final
}

console.log(rand());