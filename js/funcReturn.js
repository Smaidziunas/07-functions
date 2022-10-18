'use strict';
console.log('funcReturn.js');


// simple sum fn



function getSum(n1, n2) {
  let sum = n1 + n2;
  // console.log('sum ===', sum);
  // nutraukiam funkcijos vygdyma
  // ir grazinam kas yra po desine po return
  return sum;
}

function showAverage(n1, n2, n3) {
  const avg = (n1 + n2 + n3) / 3;

  // gauti visu nu na
  console.log(n1, n2, n3);
  console.log('avg ===', +avg.toFixed(2));
}

// pagridine aplikacijos veiksmu seka
function init() {
  let sum1 = getSum(10, 20);
  let sum2 = getSum(5, 10);
  let sum3 = getSum(1, 15);

  showAverage(sum1, sum2, sum3);
}
// init();

console.log('init ===', init);
// extra higer order funcion
function runOtherFn(fnToRun) {
  console.log('Dabar tuoj paleisiu funkcija');
  fnToRun();
  console.log('funkcijos pabaiga');
}

runOtherFn(init);


