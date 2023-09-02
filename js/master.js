// Buscamos número aleatorio
function getRandomNumber() {
  // Obtenemos un número aleatorio entre 0 y 9.
  var randomNumber = Math.floor(Math.random() * 10);
  // Devolvemos el número aleatorio.
  return randomNumber;
}

// Buscamos operacion aleatoria (+,-,*)
function chooseRandomOperation() {
  var operations = ['+', '-', '*'];
  return operations[Math.floor(Math.random() * operations.length)];
}

// Elegimos 1er número
var randomNumber = getRandomNumber();
console.log(randomNumber);

// Elegir 2do numero
var randomNumber2 = getRandomNumber();
console.log(randomNumber2);

// Elegimos operacion
var operation = chooseRandomOperation();
console.log(operation);

// Captura de elementos
var nro1 = document.getElementById('nro1');
var signo = document.getElementById('signo');
var nro2 = document.getElementById('nro2');
var res = document.getElementById('resultado');
var imgResp = document.getElementById("contenedor_img");

// Condición nro1 >= nro2
if (operation === '-' && randomNumber < randomNumber2) {
  location.reload();
  // Mostrar operacion
} else {
  nro1.innerHTML = randomNumber;
  signo.innerHTML = operation;
  nro2.innerHTML = randomNumber2;
}
imgResp.innerHTML = '<img class="img_respuesta" id="img-res" src="./img/sonic-en-espera.webp" alt="imagen-respuesta">';


//  Realizar operacion
function correctAnswer() {
  var result = eval(randomNumber + operation + randomNumber2);
  return result;
}
var result = eval(randomNumber + operation + randomNumber2);
console.log(result);

// Comparar result vs userAnswer
function compareAnswers() {
  var userInputValue = document.getElementById('userAnswer').value;
  var correctAnswerValue = correctAnswer();

  
  if (userInputValue == correctAnswerValue) {
    res.innerHTML = 'Correcto!!!';
    imgResp.innerHTML = '<img class="img_respuesta" id="img-res" src="./img/sonic-correcto.webp" alt="imagen-respuesta">';
  } else {
    res.innerHTML = 'Incorrecto, la respuesta es ' + correctAnswerValue;
    imgResp.innerHTML = '<img class="img_respuesta" id="img-res" src="./img/sonic-incorrecto.jpg" alt="imagen-respuesta">';
  }
}
    const compareButton = document.getElementById('compareButton');
    compareButton.onclick = compareAnswers;
