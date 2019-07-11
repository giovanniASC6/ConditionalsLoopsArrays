const multiplier = 100;

function rand(word) {
    const decimal = Math.random();
    const times10 = decimal *multiplier;
    const final = Math.floor(times10);
   
    return final + word;
}

console.log(rand(" times"));