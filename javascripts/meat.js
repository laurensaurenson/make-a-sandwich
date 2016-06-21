var SandwichMaker = (function(maker) {
  var meatPrices = {"turkey": 1.00, "ham": 1.10, "salami": 1.25, "bacon": 1.50, "none": 0};
  maker.addMeat = function(meat) {
    return meatPrices[meat];
  };
  return maker;
})(SandwichMaker);