import React from "react";
import { useGlobal } from "../context";

const Controls = () => {
  const { spin } = useGlobal();
  return (
    <div className="controls-container">
      <p>Crédito</p>
      <p>Apuesta</p>
      <button onClick={spin}>Spin</button>
    </div>
  );
};

export default Controls;
