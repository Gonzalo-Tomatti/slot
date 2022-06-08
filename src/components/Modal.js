import React from "react";
import { useGlobal } from "../context";

const Modal = () => {
  const { showRules } = useGlobal;
  return (
    <Modal className="modal">
      <button onClick={showRules}>X</button>
      <p>Rules</p>
    </Modal>
  );
};

export default Modal;
