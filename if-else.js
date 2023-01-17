let age = 20;

(age < 18) ? console.log("too young") : console.log("Old enough");


//switch

let car = "Mazda"

switch (car) {
    case "Mazda":
        console.log("jazda!");
        break;
    case "Honda":
        console.log("best one ever");
        break;    
    case "Ford":
        console.log("pyrpyrpyr");
        break;
    case "Audi":
        console.log("nice");
        break;
    default:
            console.log("no no no no no");
}


// Activ 1 

let ageOfBuoy = 14;

if (ageOfBuoy > 17 && country =="UK") {
    console.log("Yes I can serve you");
} else if (ageOfBuoy > 17 && country != "UK") {
    console.log("you're out of my range");
} else {
    console.log("you aren't old enough");
}


// Activity 2

let pizzaTopping = "pepperoni";

switch (pizzaTopping) {
    case "pineapple":
    case "ham":
    case "cheese":
        console.log("These are important ingredients for my pizza");
        break;
    case "pepperoni":
    case "bacon":
        console.log(`I don't mind having ${pizzaTopping} on my pizza`);
        break;
    case "halloumi":
    case "tuna":
    case "feta":
        console.log(`${pizzaTopping} should not be on a pizza`);
    default:
        console.log("No pizza");
}


// Act 3


let password = "adziabadzia";

if (password.length < 8) {
    console.log(`Your password is too short`);
} else {
    console.log(`Your password is: ${password}`);
}

let num = 30;

if (num%3 == 0 && num%5 == 0) {
    console.log("This number is divisible by 3 and 5");
} else if (num%3 == 0 || num%5 == 0) {
    console.log("This number is divisible by 3 and 5");
} else {
    console.log("something else")
}


// Activi 4


// for(i = 1; i < 101; i++) {
//     if (i%3 == 0 && i%5 == 0) {
//     console.log("FizzBuzz");
//     }
//     else if (i%3 == 0) {
//     console.log("Fizz");    
//     }
//     else if (i%5 == 0) {
//     console.log("Buzz");    
//     }
//     else {
//         console.log(i)
//     }
// }


// Activit 5

let number = 20212;

let stringNumber = number.toString();
let reversedStringNumber = stringNumber.split("").reverse().join("");

if (stringNumber == reversedStringNumber) {
    console.log(`This number: ${number} is a palindrome`)
} else {
    console.log(`This number: ${number} is NOT a palindrome`)
}


// Acti 6


let time = 12;
let placeOfWork = "Manc";
let townOfHome = "Pres";

if (time <= 7 && time >= 18) {
    console.log(`I'm at home which is ${townOfHome}`)
} else if (time >= 9 && time <= 17) {
    console.log(`I'm at work which is ${placeOfWork}`)
} else {
    console.log("i'm commuting")
}



// Activityyy 7


let veryLongWord = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";
let indexOfLastVowel = veryLongWord.length -1;
console.log(`The index of a very last vowel is ${indexOfLastVowel}`);
console.log(veryLongWord[94]);



// Ac 8

function wordFirstAndLastLetter() {

let word = "adziabadzia";

    if(word.startsWith() == word.endsWith()) {
        return true;
    } else {
        return false;
    }
}


// Actiiv 9 


function summa() {

let num1 = 68;
let num2 = 82;
let sum = num1+num2;
let multi = num1 * num2;

    // if (sum%2 == 0) {
    // return sum;
    // } else {
    // return multi;
    // }

    return (sum%2 == 0) ? sum : multi;
}























