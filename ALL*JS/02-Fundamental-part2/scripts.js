/*
///////////////////////////////////////
// Activating Strict Mode
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;


///////////////////////////////////////
// Functions
function logger() {
    console.log('My name is Jonas');
  }
  
  // calling / running / invoking function
  logger();
  logger();
  logger();
  
  function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
  }
  
  const appleJuice = fruitProcessor(5, 0);
  console.log(appleJuice);
  
  const appleOrangeJuice = fruitProcessor(2, 4);
  console.log(appleOrangeJuice);
  
  const num = Number('23');
  console.log(typeof num);



  ///////////////////////////////////////
// Function Declarations vs. Expressions

// Function declaration
function calcAge1(birthYeah) {
    return 2037 - birthYeah;
  }
  const age1 = calcAge1(1991);
  
  // Function expression
  const calcAge2 = function (birthYeah) {
    return 2037 - birthYeah;
  }
  const age2 = calcAge2(1991);
  
  console.log(age1, age2);

  

    ///////////////////////////////////////
// Arrow functions






const yearsUntilRetirement = (birthYeah, firstName) => {
    const age = 2037 - birthYeah;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
  }
  
  console.log(yearsUntilRetirement(1991, 'Tofayel')); console.log(yearsUntilRetirement(1980, 'showmik'));
  ///////////////////////////////////////
// Functions Calling Other Functions
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor(2, 3));


///////////////////////////////////////
// Reviewing Functions
const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
}

const yearsUntilRetirement = function (birthYeah, firstName) {
  const age = calcAge(birthYeah);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));


///////////////////////////////////////
// Introduction to Arrays

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);
//add items in array
const newLength = friends.push('Jay');
const newLength1 = friends.unshift('John');
console.log(friends);

//remove items in array
 


const popped = friends.pop();
console.log(friends);

const shifted = friends.shift();
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends);
console.log(friends.includes(23));
if(friends.includes('Steven')){
    console.log('You have a friend called Steven');
}


const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
  "hey",
];
const types = [];

console.log(jonas.length - 1);
console.log(typeof jonas);
// console.log(jonas[1])
// ...
// console.log(jonas[4])
// jonas[5] does NOT exist

for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] == "string") {
    types.push(jonas[i]);
  }
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
console.log(years[Math.floor(Math.random()*years.length)]);
const ages = [];
const age = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
  if (ages[i] > 18) {
    console.log(`Age ${i + 1} is ${ages[i]}, he is adult`);
    age.push(ages[i]);
  } else {
    console.log(`Age ${i + 1} is ${ages[i]}, he is teenager`);
  }
}
console.log(ages);
console.log(age);


const cars=['BMW','Audi','Toyota','Nissan','Honda'];
//show random car in console
console.log(cars[Math.floor(Math.random()*cars.length)]);



let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log('Loop is about to end...');
}
*/
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
console.log(bills)
const tips=[];
const totals=[];
// create a assending order sort function
const sort = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    let temp = 0;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
};
sort(bills);
console.log(bills);
//create a dessending order sort function
const sort1 = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    let temp = 0;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
};
sort1(bills);
console.log(bills);






//create random 10 bills
// const bills1 = [];
// for (let i = 0; i < 10; i++) {
//   bills1.push(Math.floor(Math.random() * 1000));
// }
// console.log(bills1);





