function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var p1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log("Pizza 1: ")
console.log(p1);

var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "freta"], ["mushrooms", "olives", "onions"]);
console.log("Pizza 2: ")
console.log(p2);

var p3 = pizzaOven("hand tossed", "garlic alfredo", ["mozzarella", "freta", "parmesan"], ["mushrooms", "bacon", "beef"]);
console.log("Pizza 3: ")
console.log(p3);

var p4 = pizzaOven("thin", "nutella", ["cream", "mozzarella"], ["chocolate chips", "nuts", "cracker bits"]);
console.log("Pizza 4: ")
console.log(p4);

var crustType = ["deep dish", "hand tossed", "thin crust"];
var sauceType = ["marinara", "traditional", "garlic alfredo", "BBQ"];
var cheeses = ["mozzarella", "freta", "parmesan"]
var toppings = ["pepperoni", "sausage", "mushrooms", "olives", "onions"];

function randomCheesesArr() {
    var cheesesArr = [];

    for (var i = 0; i <= Math.floor(Math.random() * cheeses.length); i++) {
        cheesesArr.push(cheeses[Math.floor(Math.random() * cheeses.length)])
    }
    return cheesesArr;
}
function randomToppingArr() {
    var toppingsArr = [];

    for (var i = 0; i <= Math.floor(Math.random() * toppings.length); i++) {
        toppingsArr.push(toppings[Math.floor(Math.random() * toppings.length)])
    }
    return toppingsArr;
}

function randomPizza() {
    var pizza = {};
    pizza.crustType = crustType[Math.floor(Math.random() * crustType.length)];
    pizza.sauceType = sauceType[Math.floor(Math.random() * sauceType.length)];
    pizza.cheeses = randomCheesesArr();
    pizza.toppings = randomToppingArr();
    console.log("Freak Pizza: ")
    console.log(pizza);
}

randomPizza();