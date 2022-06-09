import React from "react";
import { useGlobal } from "../context";
import { FaRegPlayCircle } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";

const Controls = () => {
  const {
    difficulty,
    changeDifficulty,
    spin,
    cash,
    bet,
    msg,
    showRules,
    handleCash,
    handleBet,
  } = useGlobal();
  return (
    <footer className="controls-container">
      <button onClick={showRules} className="rules btn">
        REGLAS
      </button>
      <button onClick={showRules} className="info btn">
        <FaInfoCircle />
      </button>
      <div className="balance-container">
        <div className="balance-item">
          <label>Crédito </label>
          <span>
            $
            <input
              type="text"
              minLength={1}
              maxLength={5}
              value={`${cash}`}
              onChange={(e) => handleCash(e.target.value)}
            />
          </span>
        </div>

        <div className="balance-item">
          <label>Apuesta </label>
          <span>
            $
            <input
              type="text"
              minLength={1}
              maxLength={4}
              value={`${bet}`}
              onChange={(e) => handleBet(e.target.value)}
            />
          </span>
        </div>
      </div>
      <p //22 es la longitud de 'La fila # ganó $####! '
        className={`msg ${msg.length < 44 ? "short-msg" : "long-msg"}`}
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
