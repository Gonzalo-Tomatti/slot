import React, { useEffect, useState } from "react";
import { FaBootstrap, FaCss3, FaHtml5, FaReact, FaSass } from "react-icons/fa";

const icons = [
  <FaBootstrap className="icon bootstrap" />,
  <FaCss3 className="icon css3" />,
  <FaHtml5 className="icon html5" />,
  <FaReact className="icon react" />,
  <FaSass className="icon sass" />,
];

const GlobalContext = React.createContext();
export const GlobalProvider = ({ children }) => {
  const [rows, setRows] = useState([
    { iconsArr: [], position: 0 },
    { iconsArr: [], position: 1 },
    { iconsArr: [], position: 2 },
    { iconsArr: [], position: 3 },
    { iconsArr: [], position: 4 },
  ]);

  const randomize = () => {
    return Math.floor(Math.random() * icons.length);
  };

  const spin = () => {
    const spinning = setInterval(
      () =>
        setRows((prevRows) => {
          const newRows = prevRows.map((row) => {
            //SI ES EL ÚLTIMO VUELVE AL PRINCIPIO
            if (row.position === 4) {
              return { ...row, position: 0 };
            }
            //SI ES EL PRIMERO CAMBIA LOS ÍCONOS
            else if (row.position === 0) {
              return {
                iconsArr: [
                  icons[randomize()],
                  icons[randomize()],
                  icons[randomize()],
                ],
                position: row.position + 1,
              };
            }
            //SINO AVANZA UNO
            else {
              return { ...row, position: row.position + 1 };
            }
          });
          return newRows;
        }),
      400
    );
    setTimeout(() => {
      clearInterval(spinning);
    }, 5000);
  };

  // ESTADO INICIAL
  useEffect(() => {
    setRows((prevRows) => {
      const newRows = prevRows.map((row) => {
        return {
          ...row,
          iconsArr: [
            icons[randomize()],
            icons[randomize()],
            icons[randomize()],
          ],
        };
      });
      return newRows;
    });
  }, []);

  return (
    <GlobalContext.Provider value={{ rows, spin }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => {
  return React.useContext(GlobalContext);
};
