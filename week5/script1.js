let shoppingCart = [
  { name: "T-shirt", price: 20 },
  { name: "Jeans", price: 30 },
  { name: "Sneakers", price: 40 },
  { name: "Backpack", price: 50 },
];

let total = 0;
// shoppingCart.forEach(calculateTotal) ;

// function calculateTotal(cart) {
//     total = total + cart
// }
// let i = 0

for (let i = 0; i < 4; i++) {
  total += shoppingCart[i].price;
  console.log(total);
}

let discount = 0.1;
let discountedPrice = 0;
if ((total) => 100) {
  discountedPrice = total - total * discount;
}

console.log("total is", total);
console.log("discounted price is", discountedPrice);
