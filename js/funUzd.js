'use strict';
console.log('funUzd.js');

//                                    ================ UZDAVINIAI ====================

/*1.
parasyti funkcija multi kuri sudaugina pirma parametra su antru ir grazina
parasyti funkcija divide kuri padalina pirma parametra is antro ir grazina
parasyti funkcija avg kuri gauna 2 parametrus ir grazina ju vidurki
parasyti funkcija flow() kurioje sudedam visu auksiau aprasytu funkciju rezultatus ir grazinam ir ispausdinam konsoleje.
*/

{
function multi(nb1, nb2){
let mutiply = nb1 * nb2;

return mutiply
}

function divide(nb1, nb2) {
let dividenb = nb1 / nb2;

return dividenb
}

function avg(nb1, nb2) {
let sum = nb1 + nb2;
let averageOfNb = sum / avg.length;

return averageOfNb
}

function flow(){
let multi1 = multi(3,2);
let divide1 = divide(20,2);
let avg1 = avg(6,2);

let totalSum = multi1 + divide1 + avg1;
// return `total sum === ${totalSum}, multi === ${multi1}, divide === ${divide1}, avg === ${avg1}`;
}


flow()


function getSum(n1, n2) {
let sum = n1 + n2;
// console.log('sum ===', sum);
// nutraukiam funkcijos vygdyma
// ir grazinam kas yra po desine po return
return sum;
}
}


// 2. ar skirsis reiksme?

{
// function myAge(age) {
//   if (age > 18){
//     return true;
//   } else {
//     return "did your parents allow you?"
//   }
// }
// console.log('myAge ===', myAge(17));


// function myAge(age) {
//   if (age > 18){
//     return true;
//   } 
//     return "did your parents allow you?"
//   }
// console.log('myAge ===', myAge(17));

}


// 3. Funkcija grąžins true, jei parametro amžius yra didesnis nei 18 metų.

{
// function checkAge(age) {
//   if (age > 18) {
//     return true; //console.log(true)
//   } else {
//     return confirm('Did parents allow you?');
//   }

  let age = 16;

  const checkAge = age >= 18 ? "true" : "Did parents allow you?";

  // console.log('checkAge ===', checkAge);

}


// 4. Parašykite funkciją min(a, b), kuri grąžina mažiausią iš dviejų jai perduotų skaičių (a ir b).
    // Pastaba: Math.min() naudoti negalima.

{
function getMinValue(a,b){
if(a > b){
  return b;
} else {
  return a;
}
}

// console.log('getMinValue ===', getMinValue(10,9));

}


// 5. Parašykite funkciją calculate(num1, num2, action), kuri atliks action parametru nurodytą matematinį veiksmą (“composition”, “subtraction”, “multiplication”, “division”) su num1 ir num2 nurodytais skaičiais.
    /*
    Pvz.: 
    calculate(8, 9,”composition”) // 17
    calculate(18, 9,”subtraction”) // 9
    */
    // composition, subtraction, multiplication, division


{
function calculate(num1, num2, operation) {

let text = 'Check your number and word';  
if (!['composition', 'subtraction', 'multiplication', 'division'].includes(operation)) return 'Check your number and word';
if (operation === 'multiplication') return num1 * num2;
if (operation === 'composition') return num1 + num2;
if (operation === 'subtraction') return num1 - num2;
if (operation === 'division') return num1/num2;


}
// console.log('calculate ===', calculate(4, 2,'wwd'));

}

/* 6.

Parašykite funkciją getFirstLetter(string), kuri kaip argumentą gaus tekstą (string) ir grąžins pirmą, tame tekste esančią raidę, kaip didžiąją.
Pvz.: 
getFirstLetter(“hello”) // H
getFirstLetter(“WORLD”) // W

*/
{
function capitalizeString(textValue) {
  if(typeof textValue === 'string'){
   let result = textValue.toUpperCase();
   return result.charAt(0);
  }
}
// console.log('capitalizeString ===', capitalizeString('same'));

}


/* 7.
Parašykite funkciją formText(string, number), kuri iš jai perduoti string parametro pabaigos, panaikins number  parametru nurodytą kiekį raidžių.

Pvz.:
formText(Hello World, 3) // Hello Wor
*/
{
function formText(stringValue, number){

  let result = stringValue.slice(0, stringValue.length-number);
  return result;
}
// console.log('formText ===', formText('John', 3));

}


/* 8.
Parašykite funkciją getAmountOfNumbers(number), kuri grąžins sveikąjį skaičių, atitinkantį pateikto parametro skaitmenų skaičių.

Pvz.:
getAmountOfNumbers(1000) // 4
getAmountOfNumbers(12) // 2
getAmountOfNumbers(1305981031) // 10
getAmountOfNumbers(0) // 1
*/

{
function getAmountOfNumbers(number) {
  let result = number.toString();
  return result.length;
}

// console.log('getAmountOfNumbers ===', getAmountOfNumbers(2324));

}


/* 26 skaidre >>> ? ? ? <<<
Parašykite funkciją getGeneration(number, gender), kuri suras protėvius ir palikuonis naudodami kodą. 

Funkcija turi paimti skaičių number ir simbolį gender („m“ – vyras, „f“ – moteris) ir grąžina protėvio (m/f) arba palikuonio (m/f) pavadinimą.

Pvz.:
getGeneration(2, "f") // "granddaughter"
getGeneration(-3, "m") // "great grandfather"
getGeneration(1, "f") // "daughter"
*/

