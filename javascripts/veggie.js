var SandwichMaker = (function(maker) {
  var vegPrices = {"sprouts": .50, "lettuce": .45, "tomato": .65, "peppers": .85, "none": 0};
  maker.addVeg = function(veg) {
    return vegPrices[veg];
  };
  return maker;
})(SandwichMaker);