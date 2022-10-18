'use strict';
console.log('functions.js');

/*
 Say Hello World
*/


function sayHi(username = 'please enter a name') {
  console.log('=========');
  console.log(`'Hello ${username}'`);
  console.log('=========');
}

// sayHi('James');
// sayHi('John');
// sayHi();


function sum (num1, num2){
  let suma = num1 + num2;
  console.log(`${num1} + ${num2} = ${suma}`);
}
sum (3,22);
sum (10, 42);


// parasyti funkcija kuri sudaugina 3 reiksmes su isklotine
// jei reiksme nepaduota, tai daugyba turetu ivykti su paduotom reiksmem


function multiply(a,b,c){

  if (c === undefined) {
    c = 1; 
  }

  // or function multiply(a,b,c = 1) would work without if statement;

  let mult = a * b * c;
  console.log(`${a} * ${b} * ${c} = ${mult}`);

}

// multiply(1,2,3);
// multiply(2,2);


// funkcija kuri isveda i html paduoda reiksme

function makeH2El(greetText ='Sveiki as esu naujas h2 elementas'){ 

// sukurti elementa;
const h2El = document.createElement('h2');
// prideti reiksme i el;
h2El.textContent = greetText;
// patalpinti elementa HTMLe;
document.body.append(h2El);

}
// makeH2El('Labukas');
// makeH2El('Sveiki');
// makeH2El('Kaip sekasi su funkcijom?');
// makeH2El();


// sukurti funkcija, kuri isveda vidurki is gautu tryju parametru ir atspausdina ji HTMLE, panaudojant makeH2El funkcija;
debugger
function vidurkis(num1, num2, num3){
  vidurkis= (num1 + num2 + num3) / vidurkis.length;
  let vidurkisRd = +vidurkis.toFixed(2);
  makeH2El(`Vidurkis yra ${vidurkisRd}`);
  // geriau vidurkis pakeisti i kita variable;
}

vidurkis(3,3,7);
