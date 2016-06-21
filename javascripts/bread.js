var SandwichMaker = (function(maker) {
  var breadPrices = {"white": .2, "french": 1.00, "wheat": .4, "rye":.8, "none": 0};
  maker.addBread = function(bread) {
    return breadPrices[bread];
  };
  return maker;
})(SandwichMaker);