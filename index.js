// Code your solutions in this file

function printBadges(names) {
    for (let index = 0; index < names.length; index++) {        
        console.log(`Welcome ${names[index]}! You are employee #${index + 1}.`);
    }
    return names;
}

function tailsNeverFails() {
    let flipCoin = 0;

    while (Math.random() >= 0.5) {
        flipCoin++;
    }

    return `You got ${flipCoin} tails in a row!`;

}