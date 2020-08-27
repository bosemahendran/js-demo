// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

var items = [
  {price: 100, quans: 2, unknown: 1}, 
  {price: 200, quans: 2}, 
  {price: 90, quans: 2}, 
  {price: 10, quans: 8}, 
  {price: 14, quans: 20}
]
const SHIPPING_DEFAULT = 5;
const TAX_RATE = 1.01;

function calculateTotal(items, {SHIPPING = SHIPPING_DEFAULT, DISCOUNT = 0, RANDOM = ""} = {}){

  const res = items.reduce((total, item)=>{
  return total + item.price * item.quans
  },0)

  const total = res * TAX_RATE + SHIPPING - DISCOUNT;
  
  console.log(Math.floor(total));
  if (RANDOM) console.log(RANDOM);

};

calculateTotal(items, {SHIPPING : 10, DISCOUNT: 150, RANDOM: "rer"});
calculateTotal(items, {});
calculateTotal(items, {SHIPPING : 10,});