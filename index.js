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

var pilots = [
  {
    id: 10,
    name: "Poe Dameron",
    years: 14,
  },
  {
    id: 2,
    name: "Temmin 'Snap' Wexley",
    years: 30,
  },
  {
    id: 41,
    name: "Tallissan Lintra",
    years: 16,
  },
  {
    id: 99,
    name: "Ello Asty",
    years: 22,
  },
  {
    id: 99,
    name: "Bose Asty",
    years: 0,
  }

];

const filt = pilots.filter( pilot =>  pilot.years > 20)

console.log(filt);

const oldest = pilots.reduce((oldest, pilot) =>{
  return (oldest.years) > pilot.years ? oldest : pilot
},{})

console.log(oldest);

const totalYears = pilots.reduce((acc, pilot) =>{
  return acc + pilot.years
}, 0)

console.log(totalYears);

var personnel = [
  {
    id: 5,
    name: "Luke Skywalker",
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true,
  },
  {
    id: 82,
    name: "Sabine Wren",
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false,
  },
  {
    id: 22,
    name: "Zeb Orellios",
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false,
  },
  {
    id: 15,
    name: "Ezra Bridger",
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true,
  },
  {
    id: 11,
    name: "Caleb Dume",
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true,
  },
];


const isforce = personnel.filter(person => person.isForceUser )

console.log(isforce);

const twoscore = isforce.map(two => {return two.shootingScore + two.pilotingScore})

console.log(twoscore);

const total = twoscore.reduce((acc, score) => acc + score)

console.log(total);


const other = personnel.filter(person => person.isForceUser)
              .map(two => {return two.shootingScore + two.pilotingScore})
              .reduce((acc, score) => acc + score);

console.log(other);
