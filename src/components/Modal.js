import React from "react";
import { useGlobal } from "../context";
import {
  FaCss3,
  FaHtml5,
  FaReact,
  FaBootstrap,
  FaRegWindowClose,
} from "react-icons/fa";

const Modal = () => {
  const { showRules, showModal } = useGlobal();

  return (
    <div className={`modal-overlay ${showModal && "show-modal"}`}>
      <div className="modal">
        <button className="modal-btn" onClick={showRules}>
          <FaRegWindowClose />
        </button>
        <div className="rules-container">
          <h1>Reglas </h1>
          <h3>Filas</h3>
          <ul>
            <li>Primer y tercer filas multiplican las ganancias x2.</li>
            <li>La segunda fila multiplica las ganancias x2.</li>
          </ul>
          <h3>Íconos</h3>
          <ul className="modal-icons-rules">
            <li>
              {<FaHtml5 className="html5" />} Html5 multiplica la apuesta x2.
            </li>
            <li>
              {<FaCss3 className="css3" />} Css3 multiplica la apuesta x3.
            </li>
            <li>
              {<FaBootstrap className="bootstrap" />} Bootstrap multiplica la
              apuesta x4.
            </li>
            <li>
              {<FaReact className="react" />} React multiplica la apuesta x5.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Modal;
