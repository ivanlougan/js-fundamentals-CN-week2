// let coffeOrder = [
//     "Alex - cordado",
//     "Ben - cordado",
//     "Charlie - new one"
// ];

// coffeOrder[2] = "Bob - soya latte";
// coffeOrder.push("Bob - soya latte");


// console.log(coffeOrder);
// console.log(coffeOrder.length);



// playing with arrays


let songs = [
    "Arctic Monkeys - I bet you look good on the dancefloor",
    "Muse - Stockholme Syndrome",
    "Strokes - Heart in a cage"
];

console.log(songs);

songs.push("RHCP - dani california", "Kasabian - vlad the impaler"); // adds new elements into array (at the end)
songs.pop();

console.log(songs)


let vegs = [
    "beetroot",
    "apple",
    "potatoes",
    "lettuce",
    "tomatoes",
    "rocket",
    "carrot"
];

vegs.splice(1, 1, "spinach"); // replaces second item from the array with other one
vegs.shift(); // removes first item from the array
let veggies = vegs.slice(3); // splits array into one shorter and another new array

console.log(veggies);

veggies.concat(vegs); // adds elements of one array to another
vegs.pop(); // removes carrot

console.log(vegs);
console.log(veggies);


// loop


let drinks = [
    "coffee",
    "tea",
    "water",
    "orange juice"
];

for (i = 0; i < drinks.length; i++) {
    console.log(drinks[i]);
}


let cards = [
    "Diamond", "Spade", "Heart", "Club"
]
let currentCard = "";

while (currentCard != "Spade") {
    console.log(currentCard);
    currentCard = cards [Math.floor(Math.random() * 4)];
}

console.log(currentCard);



