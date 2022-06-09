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
      <p //20 es la longitud de 'La fila # ganó $$! '
        className={`msg ${msg.length < 45 ? "short-msg" : "long-msg"}`}
      >
        {msg}
      </p>
      <FaRegPlayCircle onClick={spin} className="spin-btn btn" />
      <div className="difficulty-container">
        <p>Modo: </p>
        <button onClick={changeDifficulty} className="difficulty-btn btn">
          {difficulty === "easy" ? "EASY" : "HARD"}
        </button>
      </div>
    </footer>
  );
};

export default Controls;
