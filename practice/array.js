'use strict';
console.log('array.js');

{
let nums = [5, -4, 3, 10, -7, 14];

// parasyti funkcija kuri grazintu tik teigiamu sk masyva, nepakeiciant original masyvo;

function getPositivesArr(fullArray) {
  const positives = [];

  for(let num of fullArray) {
  // jeigu sk yra teigiamas, dedame ji i positives
    if (num > 0) {
      positives.push(num);
    }
  }
  // console.log('positives ===', positives);
  return positives;
}

let teigiami = getPositivesArr(nums);
// console.log('teigiami ===', teigiami);

}

let skaicius = '500';


// parasyti funkcija, kuri patikrina ar argumentas yra string tipo, jeigu string tai grazina, kad tai ne skaicius, jeigu skaicius, tai pavercia i valiuta;

// function makeCurrency(el) {
//   let result = 0;
//   if (typeof(el) !== "number"){
//     return "not a number";
//   } else {
//     result = "$"+el;
//     return result;
//   }
// }

// console.log('makeCurrency ===', makeCurrency(20));


// function makeCurrency(el) {
//   let result = 0;
//   if (isNaN(el) == true){
//     return "not a number";
//   } else {
//     result = "$"+el;
//     return result;
//   }
// }

// console.log('makeCurrency ===', makeCurrency('ss'));