// Acctivity 1 

let movies = [
    "James Bond - Casino Royale",
    "Avengers - Infinity War",
    "The Big Short",
    "Wolf of Wallstreet",
    "The Dark Knight"
];

movies.push("Glass Onion", "Bielmo");

for (i = 0; i < movies.length; i++) {
    console.log(movies[i]);
}



// Activityy 2


for (i = 0; i < 6; i++) {
    let randomNumber = Math.ceil(Math.random() * 50);
    console.log(randomNumber);
}




// Activ 3



for(i = 9; i >=0; i--) {
    console.log(i);
}



// Actibiti 4


for (i = 0; i < 4; i++) {
    console.log(movies[i]);
}
(movies[2] == "Ghostbusters") ? console.log("Yay it's Ghostbusters!") : console.log("Boo! We want Ghostbusters");




// Activity 5 



for (i = 0; i < 7; i++) {
    let randomNumber = Math.ceil(Math.random() * 30);
        if(randomNumber%7 == 0) {
            console.log(`Number ${randomNumber} is divisible by 7`);
        } else {
            console.log(`Number ${randomNumber} is NOT divisible by 7`);
        }
}




// Activitie 6 



let bobsFollowers = ["Andrew", "Lenny", "Alex", "Matt"];
let hannahsFollowers = ["Andrew", "Barbra", "Aghata", "Matt"];

for (i = 0; i < bobsFollowers.length; i++) {
    for (j = 0; j < hannahsFollowers.length; j++ ){
        if (bobsFollowers[i] == hannahsFollowers[j]){
            console.log(bobsFollowers[i]);
        }
    }
}




// Activity 7


// Do While Loop - executes statement at least once, 
// cause it checks the condition at the end of a loop
// it's as fast as while loop

let x = 0
do {
    console.log(x)
    x += 1;
    
} while (x < 4);


// While Loop - checks the condition at the start of a loop and iterates through the 
// inside of a loop until the condition is reached. it's slower than for loop
// it's possible that block of code not gonna be executed because of condition being 
// false at first iteration 


let teams = [
    "Barcelona", "Juventus", "Rangers", "Benfica"
]
let currentTeam = "";

while (currentTeam != "Barcelona") {
    console.log(currentTeam);
    currentTeam = teams [Math.floor(Math.random() * 4)];
}

console.log(currentTeam);



// For Loop - most popular one. we set a value of an index (i) and as long 
// the condition isn't reached it's gonna be incremented (or sometimes dicremented)
// Also it's fast and flexible cause you can for example:
// loop through every 6th item or a certain item only or loop in reverse


for (i = 0; i < 2; i++) {
    console.log(i);
}






