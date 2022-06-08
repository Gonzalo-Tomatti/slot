import React from "react";
import { useGlobal } from "../context";
import { FaRegPlayCircle } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";

const Controls = () => {
  const { difficulty, changeDifficulty, spin, cash, bet, msg } = useGlobal();
  return (
    <div className="controls-container">
      <button className="rules">REGLAS</button>
      <button className="info">
        <FaInfoCircle />
      </button>
      <div className="balance-container">
        <p>
          Crédito <span>${cash}</span>
        </p>
        <p>
          Apuesta <span>${bet}</span>
        </p>
      </div>
      <p className="msg">{msg}</p>
      <button onClick={changeDifficulty}>
        {difficulty === "easy"
          ? "Jugar en modo difícil"
          : "Jugar en modo fácil"}
      </button>
      <FaRegPlayCircle onClick={spin} className="spinButton" />
    </div>
  );
};

export default Controls;
