"use strict";
const restaurant = {
  starterMenu: ["Garlic bread", "sauce", "cheese"],
  mainMenu: ["pizza", "pasta", "risotto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const [starter, main] = restaurant.order(2, 0);
console.log(starter, main); // prints cheese pizza
