import Phaser from 'phaser';
import { useEffect } from "react";
import Escena1 from "./Scenes/Escena1.js";
import GameOver from "./Scenes/GameOver.js";
import Escena2 from "./Scenes/Escena2.js";
import Escena3 from "./Scenes/Escena3.js";
import Inicio from "./Scenes/Inicio.js";
import Escena4 from "./Scenes/Escena4.js";
import Bonustrack from "./Scenes/Bonustrack.js";
import Victory from "./Scenes/Victory.js";
import Top from "./Scenes/Top.js";
import Jefe from "./Scenes/Jefe.js";

function JuegoPhaser() {
    useEffect(() => {
        const Escenas = [Inicio, Escena1, GameOver, Escena2, Escena3, Escena4, Bonustrack, Victory, Top, Jefe];
        const crearEscena = Scene = new Scene();
        const iniciarEscena = () => Escenas.map(crearEscena);

        let config = {
            type: Phaser.AUTO,
            width: 1326,
            height: 595,
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { y: 0 },
                    debug: false
                }
            },
            scene: iniciarEscena()
        };
        let game = new Phaser.Game(config);
    },[]);
};

export default JuegoPhaser;