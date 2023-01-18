let goersAge = 63;

if (goersAge < 18) {
    console.log("8£");
} else if (goersAge > 18 && goersAge < 60) {
    console.log("10.95£");
} else {
    console.log("7.50£");
}






let coffeIsGrinding = false;

const pressGrindBeans = () => {
    if (coffeIsGrinding) {
        console.log("stopping the grind")
        coffeIsGrinding = false;
    } else { 
        console.log("is about to start")
        coffeIsGrinding = true; 
    }

}

pressGrindBeans();
pressGrindBeans();
pressGrindBeans();






const favColor = (color) => {
    console.log(`My favourite color is ${color}`);
}

favColor("blue");




let accNumber = 23987235;


const cashWithdraw = (amount, accnum) => {
    console.log(`Withdwawing £${amount} from account ${accnum}`);
}

cashWithdraw(20, 33112091);
cashWithdraw(60, 23423592);
cashWithdraw(60, accNumber);





const addUp = (num1, num2) => {
    return num1 + num2;
}

addUp(4, 6);
console.log(addUp(6, 8) + 40); 




const multiplyByNineFifths = (celsius) => {
    return celsius * (9/5);
};

function getFahrenheit(celsius) {
    return multiplyByNineFifths(celsius) + 32;
};


// alt + 0176 on numeric keypad with numlock on  =>  °
console.log("The temperature is " + getFahrenheit(20) + "°F"); 
console.log(`The temperature is ${getFahrenheit(40)}°F`);









// // Activity 1


const factorial = (n) => {
    if((n === 0) || (n === 1)) {
        return 1;
    } else {
        return (n * factorial(n-1));
    }
};

console.log(factorial(10));




// // activit 2



let orderCount = 0;

const takeOrder = (toppingOne, toppingTwo) => {
    console.log(`Pizza with ${toppingOne} and ${toppingTwo}`);
    orderCount++;
}

takeOrder("pepperoni", "ham");
takeOrder("onion", "peppers");

console.log(orderCount);





// Activity 3 




let pinNumber = 1234;
let balance = 2000;


const cashMashine = () => {

// built-in Node.js module for user input in console
    const readline = require("readline");

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

// using question() method from interface instance to ask for user inputs
rl.question("What is your PIN number?\n", function (pin) { 
    rl.question("How much money do you wanna withdraw?\n", function (cash) {
        if (pin == pinNumber) {
            console.log(`Your PIN number is correct and it is: ${pin}\n`);
            if (cash <= balance) {
                console.log(`Please take your £${cash} \nand don't forget your card!`);
            } else {
                console.log("you don't have enaugh money");
            }
        } else {
            console.log("your pin is incorrect");    
        }
            // if (cash <= balance) {
            //     console.log(`Please take your £${cash} \nand don't forget your card`);
            // } else {
            //     console.log("you don't have enaugh money");
            // }
        rl.close();
    });
});

// closing the process
rl.on("close", function () {
    console.log("\n    Goodbye!\n");
    process.exit(0);
});
}

cashMashine();














