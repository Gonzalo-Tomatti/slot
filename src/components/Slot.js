import React from "react";
import { useGlobal } from "../context";

const Slot = () => {
  const { rows } = useGlobal();
  const applyBg = (index) => {
    let color;
    switch (index) {
      case 0:
        color = "bg1";
        break;
      case 1:
        color = "bg2";
        break;
      case 2:
        color = "bg3";
        break;
      case 3:
        color = "bg4";
        break;
      case 4:
        color = "bg1";
        break;
      case 5:
        color = "bg2";
        break;
      case 6:
        color = "bg4";
        break;
    }
    return color;
  };

  return (
    <section className="slot-rows-container">
      {rows.map((row, index) => (
        <div
          key={index}
          className={`${applyBg(index)} slot-row position${row.position}`}
        >
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
