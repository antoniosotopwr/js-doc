// "use strict";
// const restaurant = {
//   starterMenu: ["Garlic bread", "sauce", "cheese"],
//   mainMenu: ["pizza", "pasta", "risotto"],
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
// };

// const [starter, main] = restaurant.order(2, 0);
// console.log(starter, main); // prints cheese pizza

const restaurant = {
  nameR: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories); // this prints Classico Italiano  Object { thu: {…}, fri: {…}, sat: {…} } Array(4) [ "Italian", "Pizzeria", "Vegetarian", "Organic" ]

const arr = [7, 8, 9];
const traditionalNewArr = [1, 2, arr[0], arr[1], arr[2]];
// VS Spread operator
const newArr = [1, 2, ...arr];
