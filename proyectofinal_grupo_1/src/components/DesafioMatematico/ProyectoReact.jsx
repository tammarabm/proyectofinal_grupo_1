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

  const generateChallenge = (nivel) => {
    let num1, num2, operator, correctAnswer;

    if (nivel === 'basico') {
      // Nivel Basico: Sumas y restas simples
      const isAddition = Math.random() > 0.5;
      num1 = Math.floor(Math.random() * 10) + 1;
      num2 = Math.floor(Math.random() * 10) + 1;

      if (!isAddition && num1 < num2) [num1, num2] = [num2, num1];
      operator = isAddition ? '+' : '-';
      correctAnswer = isAddition ? num1 + num2 : num1 - num2;

    } else if (nivel === 'intermedio') {
      // Nivel Intermedio: Multiplicaciones y divisiones
      const isMultiplication = Math.random() > 0.5;
      num1 = Math.floor(Math.random() * 10) + 1;
      num2 = Math.floor(Math.random() * 10) + 1;
    
      if (!isMultiplication) {
        num1 = num1 * num2;
      }
    
      operator = isMultiplication ? 'x' : '/';
      correctAnswer = isMultiplication ? num1 * num2 : num1 / num2; 

    } else if (nivel === 'avanzado') {
      // Nivel Avanzado: Operaciones con decimales, fracciones y ecuaciones
    }
    setCurrentChallenge({ num1, num2, operator, correctAnswer });
  };

  const verifyAnswer = (userAnswer) => {

    if (userAnswer === '') return;

    if (parseInt(userAnswer) === currentChallenge.correctAnswer) {
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
        <PantallaFinal points={points} resetearJuego={resetearJuego} />
      ) : showResult ? (
        <PantallaResultado isCorrect={isCorrect} nextRound={nextRound} />
      ) : (
        <DesafioMatematico challenge={currentChallenge} verifyAnswer={verifyAnswer} />
      )}
    </div>
  );
};

export default ProyectoReact;
