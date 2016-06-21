var finalSandwichPrice = 0;
var selectedTopping;
var meatChooser = document.getElementById("meat-chooser");
var vegChooser = document.getElementById("veg-chooser");
var breadChooser = document.getElementById("bread-chooser");
var condChooser = document.getElementById("cond-chooser");
var cheeseChooser = document.getElementById("cheese-chooser");

meatChooser.addEventListener("change", function(event) {
  selectedTopping = event.target.value;
  SandwichMaker.addTopping(SandwichMaker.addMeat(selectedTopping))
  console.log("meat chosen: ", selectedTopping);
  console.log("meat price: ", SandwichMaker.getPrice() ); 
});

vegChooser.addEventListener("change", function(event) {
  selectedTopping = event.target.value;
  SandwichMaker.addTopping(SandwichMaker.addVeg(selectedTopping))
  console.log("veg chosen: ", selectedTopping);
  console.log("veg price: ", SandwichMaker.getPrice() ); 
});

breadChooser.addEventListener("change", function(event) {
  selectedTopping = event.target.value;
  SandwichMaker.addTopping(SandwichMaker.addBread(selectedTopping))
  console.log("bread chosen: ", selectedTopping);
  console.log("bread price: ", SandwichMaker.getPrice() ); 
});

condChooser.addEventListener("change", function(event) {
  selectedTopping = event.target.value;
  SandwichMaker.addTopping(SandwichMaker.addCond(selectedTopping))
  console.log("condiment chosen: ", selectedTopping);
  console.log("condiment price: ", SandwichMaker.getPrice() ); 
});

cheeseChooser.addEventListener("change", function(event) {
  selectedTopping = event.target.value;
  SandwichMaker.addTopping(SandwichMaker.addCheese(selectedTopping))
  console.log("bread chosen: ", selectedTopping);
  console.log("bread price: ", SandwichMaker.getPrice() ); 
});

var submitOrder = document.getElementById("submitOrder");
submitOrder.addEventListener("click", finished);

function finished () {
  var finalOrder = document.getElementById("final-order");
  finalSandwichPrice = SandwichMaker.getPrice();
  console.log("price: ", finalSandwichPrice);
  finalOrder.innerHTML = `<h2>You have submitted your order.</h2> <p>You ordered a sandwich on ${breadChooser.value} with ${meatChooser.value}, ${cheeseChooser.value}, ${vegChooser.value}, and ${condChooser.value}.</p>`;
  finalOrder.innerHTML += `<h2>Price: ${finalSandwichPrice}</h2>`;
}