import React from "react";
import { useGlobal } from "../context";
import { FaRegPlayCircle } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";

const Controls = () => {
  const { difficulty, changeDifficulty, spin, cash, bet, msg, showRules } =
    useGlobal();
  return (
    <footer className="controls-container">
      <button onClick={showRules} className="rules btn">
        REGLAS
      </button>
      <button onClick={showRules} className="info btn">
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
      <FaRegPlayCircle onClick={spin} className="spinButton btn" />
      <button onClick={changeDifficulty} className="difficulty btn">
        {difficulty === "easy" ? "Modo difícil" : "Modo fácil"}
      </button>
    </footer>
  );
};

export default Controls;
