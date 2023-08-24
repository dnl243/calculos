 // Elegir 1er numero
 function getRandomNumber() {
  // Obtenemos un número aleatorio entre 0 y 9.
  var randomNumber = Math.floor(Math.random() * 10);
  // Devolvemos el número aleatorio.
  return randomNumber;
}
var randomNumber = getRandomNumber();

// Elegir 2do numero
function getRandomNumber2() {
  // Obtenemos un número aleatorio entre 0 y 9.
  var randomNumber2 = Math.floor(Math.random() * 10);
  // Devolvemos el número aleatorio.
  return randomNumber2;
}
var randomNumber2 = getRandomNumber2();

// Elegir operacion
function chooseRandomOperation() {
  var operations = ['+', '-', '*'];
  return operations[Math.floor(Math.random() * operations.length)];
}
var operation = chooseRandomOperation();

// Captura de elementos
var nro1 = document.getElementById('nro1');
var signo = document.getElementById('signo');
var nro2 = document.getElementById('nro2');
var res = document.getElementById('resultado');

// Condición nro1 >= nro2
if (operation === '-' && randomNumber < randomNumber2) {
  location.reload();
  // Mostrar operacion
} else {
  nro1.innerHTML = randomNumber;
  signo.innerHTML = operation;
  nro2.innerHTML = randomNumber2;
}

//  Realizar operacion
function correctAnswer() {
  var result = eval(randomNumber + operation + randomNumber2);
  return result
}
var result = eval(randomNumber + operation + randomNumber2);
console.log(result)

// Comparar result vs userAnswer
function compareAnswers() {
  var userInputValue = document.getElementById('userAnswer').value;
  var correctAnswerValue = correctAnswer();

  var imgResp = document.getElementById('img-res');

  if (userInputValue == correctAnswerValue) {
    res.innerHTML = 'Correcto!!!';
    imgResp.scr = 'sonic-correcto.webp';
  } else {
    res.innerHTML = 'Incorrecto, la respuesta es ' + correctAnswerValue;
  }
}

const compareButton = document.getElementById('compareButton');
compareButton.onclick = compareAnswers;