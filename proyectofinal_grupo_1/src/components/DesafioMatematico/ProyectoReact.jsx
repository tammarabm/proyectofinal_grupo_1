import { useState } from 'react';
import PantallaInicio from './PantallaInicio';
import DesafioMatematico from './DesafioMatematico';
import PantallaResultado from './PantallaResultado';
import PantallaFinal from './PantallaFinal';

const ProyectoReact = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [currentChallenge, setCurrentChallenge] = useState({});
  const [nivel, setNivel] = useState('basico');
  const [points, setPoints] = useState(0);
  const [round, setRound] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [juegoTerminado, setJuegoTerminado] = useState(false);

  const startGame = (nivelSeleccionado) => {
    console.log("Juego iniciado");
    setGameStarted(true);
    setNivel(nivelSeleccionado);
    generateChallenge(nivelSeleccionado);
    setPoints(0);
    setRound(1);
    setJuegoTerminado(false);
  };

  const backToMenu = (botonSeleccionado) => {
    console.log("Menu regresado");
    setGameStarted(false);
    setJuegoTerminado(false);
  };

  const generateChallenge = (nivel) => {
    let num1, num2, operator, correctAnswer;

    if (nivel === 'basico') {
      // Nivel Basico: Sumas y restas simples
      const isAddition = Math.random() > 0.5; // Decide aleatoriamente si es suma o resta
      num1 = Math.floor(Math.random() * 10) + 1;
      num2 = Math.floor(Math.random() * 10) + 1;

      if (!isAddition && num1 < num2) [num1, num2] = [num2, num1]; // Asegura que no se reste un número mayor de un menor
      operator = isAddition ? '+' : '-';
      correctAnswer = isAddition ? num1 + num2 : num1 - num2; // Respusta

    } else if (nivel === 'intermedio') {
      // Nivel Intermedio: Multiplicaciones y divisiones
      const isMultiplication = Math.random() > 0.5; // Decide aleatoriamente si es multiplicación o división
      num1 = Math.floor(Math.random() * 10) + 1;
      num2 = Math.floor(Math.random() * 10) + 1;

      if (!isMultiplication) {
        num1 = num1 * num2; // Asegura que la división sea exacta
      }

      operator = isMultiplication ? 'x' : '/';
      correctAnswer = isMultiplication ? num1 * num2 : num1 / num2; // Respuesta

    } else if (nivel === 'avanzado') {
      // Nivel Avanzado: Operaciones con decimales, fracciones y ecuaciones
      const tipoOperacion = Math.floor(Math.random() * 2); // Decide aleatoriamente el tipo de operación

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

      } else if (tipoOperacion === 2) {
        // Ecuaciones
      }

    }
    setCurrentChallenge({ num1, num2, operator, correctAnswer });
  };

  const verifyAnswer = (userAnswer) => {
    if (userAnswer === '') return; // Si la respuesta está vacía, no hacer nada

    const userAnswerFloat = parseFloat(userAnswer); // Convierte la respuesta del usuario a número

    console.log("Nivel:", nivel);
    console.log("Respuesta correcta:", currentChallenge.correctAnswer);
    console.log("Respuesta del usuario:", userAnswerFloat);

    let isCorrectAnswer

    // Comprobamos si el desafío actual es una fracción
    if (nivel === 'avanzado' && currentChallenge.operator === '*') {
      // Convertimos la entrada del usuario
      const [userNumerator, userDenominator] = userAnswer.split('/').map(Number);

      if (userDenominator === 0) { // Verifica si el denominador es cero
        setIsCorrect(false);
        setShowResult(true);
        return;
      }

      const correctNumerator = currentChallenge.correctAnswer[0];
      const correctDenominator = currentChallenge.correctAnswer[1];

      isCorrectAnswer = (userNumerator * correctDenominator === correctNumerator * userDenominator);
    } else {
      // Verifica la respuesta para otros niveles
      const userAnswerFloat = parseFloat(userAnswer);
      isCorrectAnswer = nivel === 'avanzado'
        ? Math.abs(userAnswerFloat - currentChallenge.correctAnswer) < 0.01  // Para decimales, permite un margen de error
        : userAnswerFloat === currentChallenge.correctAnswer; // Para los otros niveles, debe ser exacto
    }

    if (isCorrectAnswer) {
      setPoints(points + 1);
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
    setShowResult(true);
  };

  const nextRound = () => {
    if (round < 5) {
      setRound(round + 1);
      generateChallenge(nivel);
      setShowResult(false);
    } else {
      setShowResult(false);
      setJuegoTerminado(true);
    }
  };

  const resetearJuego = () => {
    setJuegoTerminado(false);
    setPoints(0);
    setRound(1);
    console.log(points);
  };

  return (
    <div>
      {!gameStarted ? (
        <PantallaInicio startGame={startGame} /> // Pasar la función correctamente
      ) : juegoTerminado ? (
        <PantallaFinal points={points} resetearJuego={resetearJuego} volverMenu={backToMenu}/>
      ) : showResult ? (
        <PantallaResultado isCorrect={isCorrect} nextRound={nextRound} />
      ) : (
        <DesafioMatematico challenge={currentChallenge} verifyAnswer={verifyAnswer} volverMenu={backToMenu}/>
      )}
    </div>
  );
};

export default ProyectoReact;
