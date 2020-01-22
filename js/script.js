// // Un alert espone 5 numeri casuali.
var numberRandom = [];
while (numberRandom.length < 5) { //lunghezza dell'array inferiore a 5
  var number = getRandomNumber(1, 100);
  // console.log(number);
  //questo numero non deve essere nel mio array
  //includes mi restituisce un true o un false
  if(!isInArray(numberRandom, number)) { //numberRandom.includes(number) == false
    //posso inserire il mio numero nell'array
    numberRandom.push(number);
  }
}

console.log(numberRandom);
alert(numberRandom);

// Da li parte un timer di 30 secondi.
setTimeout(function () {
  //dobbia chiedere 5 numeri
  // ogni volta che hop un numero posso controllare se è nell'array random

  var numbersUser = [];
  // for (var i = 0; i < 5; i++) {
  //   var numberUser = parseInt(prompt('inserisci il numero ' + (i + 1)));
  //     //se c'e allora lo conservo
  //   if(numberRandom.includes(numberUser)) { //numberRandom.includes(numberUser) == true
  //     numbersOk.push(numberUser);
  //   }
  // }
  //devo inserire 5 numeri ma devono essere diversi
  var i = 0;
  while (numbersUser.length < 5) {
    var numberUser = parseInt(prompt('inserisci il numero ' + (i + 1)));
    if(!isInArray(numbersUser, numberUser)) {
      numbersUser.push(numberUser);
      i++;
    }
  }

  // devo controllare che ogni singolo elemento non deve essere in numberRandom
  var numbersOk = [];
  for (var i = 0; i < numbersUser.length; i++) {
    if (numberRandom.includes(numbersUser[i])) {
      numbersOk.push(numbersUser[i]);
    }
  }

  alert(numbersOk + ' Hai indovinato ' + numbersOk.length + ' numeri');
  //stampo i numeri indovinati e quante volte ha indovinato
}, 5000);
// // Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente.
// //Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati
//
//
//
// // FUNCTIONS
// function getRandomNumber(min, max) {
//   return Math.floor(Math.random()*(max-min+1)+min);
// }
//
//
// function isInArray (array, element) {
//   var result = false;
//   var i = 0;
//   //andiamo avanti finche il risultato è false
//   //finche abbiamo elementi
//   // true && true
//   // false
//   while (i < array.length && result == false) {
//     console.log(i);
//     if (array[i] == element) {
//       result = true;
//     }
//     i++;
//   }
//   return result;
// }
//
// console.log(isInArray([1,2,3,4], 10));


var i = 10;
var countdown = setInterval(function () {
  console.log(i);
  if(i == 0) {
    clearInterval(countdown);
    // setTimeout(game, 1000);
  }
  i--;
}, 300);

setTimeout(game, 310);

function game() {
  alert('inizia a giocare');
}
