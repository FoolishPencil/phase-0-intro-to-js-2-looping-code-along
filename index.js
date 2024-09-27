// Code your solutions in this file
// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy Birthday me!`);
//     debugger;
// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//         debugger;
//     }

//     return gifts;
// }

// wrapGifts(gifts);

function writeCards(names, eventName) {
    let messages = [];

    for (let i = 0; names && i < names.length; i++) {
        let message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;

        messages.push(message);
    }

    return messages;
}

const namesArray = ['Guadalupe', 'Ollie', 'Aki'];
const eventName = "surprise";
const thankYouMessages = writeCards(namesArray, eventName);

console.log(thankYouMessages);

function countDown(number) {
    // for (let i = number; i >= 0; i--) {
    //     console.log([i]);
    // }
    while (number >= 0) {
        console.log(number);
        number--;
    }
}

countDown(10);
countDown(4);