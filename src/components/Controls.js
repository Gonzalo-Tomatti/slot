import React from "react";
import { useGlobal } from "../context";
import { FaRegPlayCircle } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";

const Controls = () => {
  const { difficulty, changeDifficulty, spin, cash, bet, msg, showRules } =
    useGlobal();
  return (
    <footer className="controls-container">
      <button onClick={showRules} className="rules">
        REGLAS
      </button>
      <button onClick={showRules} className="info">
        <FaInfoCircle />
      </button>
      <div className="balance-container">
        <p>
          Crédito <span>$ {cash}</span>
        </p>
        <p>
          Apuesta <span>$ {bet}</span>
        </p>
      </div>
      <p className="msg">{msg}</p>
      <button onClick={changeDifficulty} className="difficulty">
        {difficulty === "easy" ? "Modo difícil" : "Modo fácil"}
      </button>
      <FaRegPlayCircle onClick={spin} className="spinButton" />
    </footer>
  );
};

export default Controls;
