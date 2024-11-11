import { useState } from 'react';
import PantallaInicio from './PantallaInicio';
import DesafioMatematico from './DesafioMatematico';
import PantallaResultado from './PantallaResultado';
import PantallaFinal from './PantallaFinal';

const ProyectoReact = () => {
  const [gameStarted, setGameStarted] = useState(false); // Indica si el juego ha comenzado
  const [currentChallenge, setCurrentChallenge] = useState({}); // Desafio Actual
  const [nivel, setNivel] = useState('basico'); // Nivel
  const [points, setPoints] = useState(0); // Puntos
  const [round, setRound] = useState(0); // Ronda
  const [showResult, setShowResult] = useState(false); // Resultado
  const [isCorrect, setIsCorrect] = useState(false); // Respuesta Correcta
  const [juegoTerminado, setJuegoTerminado] = useState(false); // Indica si el juego ha terminado

   // Inicio del Juego
  const startGame = (nivelSeleccionado) => {
    console.log("Juego iniciado");
    setGameStarted(true);
    setNivel(nivelSeleccionado); // Establece el nivel seleccionado (basico, intermedio, avanzado)
    generateChallenge(nivelSeleccionado); // Genera el primer desafio segun el nivel
    setPoints(0);
    setRound(1);
    setJuegoTerminado(false);
  };

  // Vuelve al Menu del Juego
  const backToMenu = () => {
    console.log("Menu regresado");
    setGameStarted(false);
    setJuegoTerminado(false);
    setPoints(0); // Reinicia los puntos
  };

  // Genera los desafios segun el nivel seleccionado
  const generateChallenge = (nivel) => {
    let num1, num2, num3, operator, correctAnswer, tipoOperacion;

    if (nivel === 'basico') {
      // Nivel Basico: Sumas y restas simples
      const isAddition = Math.random() > 0.5; // Selecciona aleatoriamente si es suma o resta
      num1 = Math.floor(Math.random() * 10) + 1;
      num2 = Math.floor(Math.random() * 10) + 1;

      if (!isAddition && num1 < num2) [num1, num2] = [num2, num1]; // Asegura que no se reste un número mayor de un menor
      operator = isAddition ? '+' : '-';
      correctAnswer = isAddition ? num1 + num2 : num1 - num2; // Respuesta

    } else if (nivel === 'intermedio') {
      // Nivel Intermedio: Multiplicaciones y divisiones
      const isMultiplication = Math.random() > 0.5; // Selecciona aleatoriamente si es multiplicación o división
      num1 = Math.floor(Math.random() * 10) + 1;
      num2 = Math.floor(Math.random() * 10) + 1;

      if (!isMultiplication) {
        num1 = num1 * num2; // Asegura que la división sea exacta
      }

      operator = isMultiplication ? '*' : '/';
      correctAnswer = isMultiplication ? num1 * num2 : num1 / num2; // Respuesta

    } else if (nivel === 'avanzado') {
      // Nivel Avanzado: Operaciones con decimales, fracciones y ecuaciones
      tipoOperacion = Math.floor(Math.random() * 4); // Selecciona aleatoriamente el tipo de operación

      if (tipoOperacion === 0) {
        // Operaciones con Decimales
        const isAddition = Math.random() > 0.5;
        num1 = parseFloat((Math.random() * 10 + 1).toFixed(2));
        num2 = parseFloat((Math.random() * 10 + 1).toFixed(2));

        if (!isAddition && num1 < num2) [num1, num2] = [num2, num1]; // Asegura que no se reste un número mayor de un menor
        operator = isAddition ? '+' : '-';
        correctAnswer = parseFloat((isAddition ? num1 + num2 : num1 - num2).toFixed(2)); // Respuesta con dos decimales

      } else if (tipoOperacion === 1) {
        // Operaciones con Fracciones
        num1 = [
          Math.floor(Math.random() * 10) + 1, // Numerador 1
          Math.floor(Math.random() * 10) + 1 // Denominador 1
        ];

        num2 = [
          Math.floor(Math.random() * 10) + 1, // Numerador 2
          Math.floor(Math.random() * 10) + 1 // Denominador 2
        ];

        operator = '*';
        correctAnswer = [num1[0] * num2[0], num1[1] * num2[1]]; // Respuesta

      } else if (tipoOperacion === 2){
        // Ecuaciones: num1 + x = num2 / num1 - x = num2
        const isAddition = Math.random() > 0.5;
        num1 = Math.floor(Math.random() * 10) + 1;
        let x = Math.floor(Math.random() * 10) + 1;
       
        if (!isAddition && num1 < x) [num1, x] = [x, num1]; // Asegura que no se reste un número mayor de un menor
        operator = isAddition ? '+' : '-';
        num2 = isAddition ? num1 + x : num1 - x;
        correctAnswer = x;
      
      } else if (tipoOperacion === 3) {
        // Ecuaciones: num1 * x + num2 = num3
        num1 = Math.floor(Math.random() * 10) + 1;
        num2 = Math.floor(Math.random() * 10) + 1;
        let x = Math.floor(Math.random() * 10) + 1;
        num3 = num1 * x + num2;
        operator = '+';
        correctAnswer = (num3 - num2) / num1;
      } 
    }
    setCurrentChallenge({ num1, num2, num3, operator, correctAnswer, tipoOperacion });
  };

  // Verificadores de respuesta para cada tipo de operación
  const verifyBasicIntermediateAnswer = (userAnswer) => { // Verifica el nivel Basico e Intermedio
    const userAnswerFloat = parseFloat(userAnswer);
    return userAnswerFloat === currentChallenge.correctAnswer;
  };

  const verifyDecimalAnswer = (userAnswer) => { // Verifica Decimales (Nivel Avanzado)
    const userAnswerFloat = parseFloat(userAnswer);
    return Math.abs(userAnswerFloat - currentChallenge.correctAnswer) < 0.01;
  };

  const verifyFractionAnswer = (userAnswer) => { // Verifica Fracciones (Nivel Avanzado)
    const [userNumerator, userDenominator] = userAnswer.split('/').map(Number);
    const [correctNumerator, correctDenominator] = currentChallenge.correctAnswer;
    return (userNumerator * correctDenominator) === (correctNumerator * userDenominator);
  };

  const verifyEquiationAnswer = (userAnswer) => { // Verifica Ecuaciones (Nivel Avanzado)
    const userAnswerFloat = parseFloat(userAnswer);
    return userAnswerFloat === currentChallenge.correctAnswer;
  };

  // Verifica la respuesta del usuario segun el nivel y tipo de operación
  const verifyAnswer = (userAnswer) => {
    if (userAnswer === '') return; // Evita verificar si la respuesta esta vacia

    let isCorrectAnswer = false;

    if (nivel === 'avanzado') { // Nivel Avanzado
      const tipoOperacion = currentChallenge.tipoOperacion;
      if (tipoOperacion === 0) {
        isCorrectAnswer = verifyDecimalAnswer(userAnswer);
      } else if (tipoOperacion === 1) {
        isCorrectAnswer = verifyFractionAnswer(userAnswer);
      } else if (tipoOperacion === 2 || tipoOperacion === 3) {
        isCorrectAnswer = verifyEquiationAnswer(userAnswer);
      }
    }
    else {
      isCorrectAnswer = verifyBasicIntermediateAnswer(userAnswer); // Niveles Basico e Intermedio
    }

    if (isCorrectAnswer) {
      setPoints(points + 1);
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
    setShowResult(true);

    console.log("Nivel:", nivel);
    console.log("Respuesta correcta:", currentChallenge.correctAnswer);
    console.log("Respuesta del usuario:", userAnswer);

  };

  // Avanza a la siguiente ronda o muestra la pantalla de fin si se completaron las 5 rondas
  const nextRound = () => {
    if (round < 5) {
      setRound(round + 1);
      generateChallenge(nivel); // Genera un nuevo desafio
      setShowResult(false);
    } else {
      setShowResult(false);
      setJuegoTerminado(true); // Marca como juego finalizado despues de 5 rondas
    }
  };

  // Reinicia el Juego y regresa a la primera ronda
  const resetearJuego = () => {
    setJuegoTerminado(false);
    setPoints(0);
    setRound(1);
    generateChallenge(nivel);
    setShowResult(false);
    console.log("Puntos Finales: " + points);
  };


  return (
    <div>
      {!gameStarted ? (
        <PantallaInicio startGame={startGame} /> // Pantalla Inicial
      ) : juegoTerminado ? (
        <PantallaFinal points={points} resetearJuego={resetearJuego} volverMenu={backToMenu} /> // Pantalla final con los puntos
      ) : showResult ? (
        <PantallaResultado isCorrect={isCorrect} nextRound={nextRound} /> // Pantalla de resultado
      ) : (
        <DesafioMatematico challenge={currentChallenge} verifyAnswer={verifyAnswer} volverMenu={backToMenu} /> // Pantalla de desafío
      )}
    </div>
  );
};

export default ProyectoReact;
