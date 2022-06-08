import React from "react";
import { useGlobal } from "../context";

const Slot = () => {
  const { rows } = useGlobal();

  return (
    <section className="slot-rows-container">
      {rows.map((row, index) => (
        <div key={index} className={`slot-row position${row.position}`}>
          {row.iconsArr.map((icon, iconPosition) => (
            <div key={iconPosition} className="icon-container">
              {icon}
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};

export default Slot;
