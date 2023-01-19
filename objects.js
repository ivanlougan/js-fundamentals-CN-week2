

const person2 = {
    name:"Bombert",
    age: "30",
    hobbies: "swimming",
    movies: [
      "The Big Short",
      "Matrix",
      "Avengers: Infinity War"
    ],
    sayHi() {
      return `Hello my name is ${this.name}`;
    }
    // songs: [
    //   "Arctic Monkeys - Pretty Visitors",
    //   "RHCP - Dani California",
    //   "Kasabian - Vlad the Impaler"
    // ]
  }

  person2.songies = ["super song", "even better song"];

  // console.log(person2.songs);
  console.log(person2.sayHi());
  

  let day = "Monday"

  const alarm = {
    weekendAlarm: "no alarm needed",
    weekdayAlarm: "get up at 7",
  }

switch(day) {
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    console.log(alarm.weekdayAlarm);
    break;
  case "Saturday":
  case "Sunday":
    console.log(alarm.weekendAlarm);
    break;
  default:
    console.log("Wrong input");
}




// Activity 2



const pet = {
  name: "Burek",
  typeOfPet: "dog",
  age: 3,
  colour: "red",
  eat() {
    // console.log(this.name + " is doin omnomnommomnomnomm")
    return this.name + " is doin omnomnommomnomnomm";
  },
  drink() {
    return this.name + " is doin siorpsiorpsiorpsiorp";
  }

}

pet.eat();



// Activity 3 



let allDrinks = ["coffe", "tea"];
let foodOrder = "pancakes";


const coffeShop = {
  branch: "RoboCoffe",
  drinks: new Map([
    ["coffe", 4],
    ["tea", 3],
    ["orange juice", 3],
    ["beer", 5],
    ["house wine", 6]
  ]),
  food: new Map([
    ["pancakes", 8],
    ["scrambled eggs", 6],
    ["full english", 10],
    ["soup", 5],
    ["sunday roast", 15]
  ]),

  
  drinksOrderedFunction(allDrinksOrdered) {
    let drinksOrdered = [""];
    cost = 0;
    for (const drink of this.drinks.keys()) {
      // console.log(drink)
      for (i = 0; i < allDrinksOrdered.length; i++){
        if (allDrinksOrdered[i] == drink) {
            drinksOrdered.push(drink);
            cost += this.drinks.get(drink);
            console.log(`${drink} has been added to your order`);        
        }
      }       
    }
    return `You ordered: ${allDrinksOrdered}
    and the cost of it is: ${cost}\n`;
  },

  
  foodOrderedFunction(allFoodOrdered) {
    let foodOrdered = [""];
    costOfFood = 0;
    for (const meal of this.food.keys()) {
      for (i = 0; i < allFoodOrdered.length; i++){
        if (allFoodOrdered[i] == meal) {
            foodOrdered.push(meal);
            costOfFood += this.food.get(meal);
            console.log(`${meal} has been added to your order`);        
        }
      }       
    }
    return `You ordered: ${allFoodOrdered}
    and it's cost is: ${costOfFood}\n`;
  },
  totalCost() {
    return "Total cost: " + (cost + costOfFood) + "£";
  }  
}
// console.log(coffeShop.food.keys(0));

console.log(coffeShop.drinksOrderedFunction( ["coffe", "tea", "beer"]));
console.log(coffeShop.foodOrderedFunction( ["soup", "pancakes", "full english"]));
console.log(coffeShop.totalCost());












