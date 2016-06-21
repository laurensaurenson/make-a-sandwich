var SandwichMaker = (function(maker) {
  var condPrices = {"mustard": .60, "ketchup": .30, "pickles": .75, "hotSauce": .6, "none": 0};
  maker.addCond = function(cond) {
    return condPrices[cond];
  };
  return maker;
})(SandwichMaker);