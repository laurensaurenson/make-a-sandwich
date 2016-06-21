var SandwichMaker = (function(maker) {
  var cheesePrices = {"cheddar": .60, "swiss": .30, "havarti": .75, "provolone": .6, "none": 0};
  maker.addCheese = function(cheese) {
    return cheesePrices[cheese];
  };
  return maker;
})(SandwichMaker);