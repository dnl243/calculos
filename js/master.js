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

// Mostrar operacion
document.write('<h1>'+ randomNumber +' '+ operation +' '+ randomNumber2 +'</h1>')

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

  if (userInputValue == correctAnswerValue) {
    document.write('<h2>Correcto!</h2>');
  } else {
    document.write('<h2>Incorrecto. El resultado correcto es ' + correctAnswerValue + '</h2>');
  }
}

const compareButton = document.getElementById('compareButton');
compareButton.onclick = compareAnswers;