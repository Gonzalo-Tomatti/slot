import React, { useEffect, useState } from "react";
import { FaCss3, FaHtml5, FaReact, FaBootstrap } from "react-icons/fa";

const GlobalContext = React.createContext();
export const GlobalProvider = ({ children }) => {
  const [icons, setIcons] = useState([
    <FaCss3 className="icon css3" />,
    <FaHtml5 className="icon html5" />,
  ]);
  const randomize = () => {
    return Math.floor(Math.random() * icons.length);
  };
  const [rows, setRows] = useState([
    {
      iconsArr: [icons[randomize()], icons[randomize()], icons[randomize()]],
      position: 0,
    },
    {
      iconsArr: [icons[randomize()], icons[randomize()], icons[randomize()]],
      position: 1,
    },
    {
      iconsArr: [icons[randomize()], icons[randomize()], icons[randomize()]],
      position: 2,
    },
    {
      iconsArr: [icons[randomize()], icons[randomize()], icons[randomize()]],
      position: 3,
    },
    {
      iconsArr: [icons[randomize()], icons[randomize()], icons[randomize()]],
      position: 4,
    },
  ]);
  const [difficulty, setDifficulty] = useState("easy");

  const [cash, setCash] = useState(100);
  const [bet, setBet] = useState(5);
  const [msg, setMsg] = useState("Good Luck!");
  const [isSpinning, setIsSpinning] = useState(false);
  const [results, setResults] = useState([]);
  const [showModal, setShowModal] = useState(true);

  //este boolean indica si los íconos de la maquinita actuales son de cuando se cargó la página
  const [firstLoad, setFirstLoad] = useState(true);

  //esta señal indica cuando la máquinita deja de girar para que se actualicen los resultados. Es solo un número sin importancia que va cambiando
  const [signal, setSignal] = useState(0);

  const changeDifficulty = () => {
    difficulty === "easy" ? setDifficulty("hard") : setDifficulty("easy");
  };

  const showRules = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    if (difficulty === "easy") {
      setIcons([
        // <FaCss3 className="icon css3" />,
        <FaHtml5 className="icon html5" />,
      ]);
    } else {
      setIcons([
        <FaCss3 className="icon css3" />,
        <FaHtml5 className="icon html5" />,
        <FaBootstrap className="icon bootstrap" />,
        <FaReact className="icon react" />,
      ]);
    }
  }, [difficulty]);

  const spin = () => {
    if (!isSpinning) {
      setMsg("");
      setCash((prevCash) => prevCash - bet);
      spinIcons();
    }
  };

  const spinIcons = () => {
    setIsSpinning(true);
    const iconsSpinning = setInterval(
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
      clearInterval(iconsSpinning);
      setIsSpinning(false);
      setFirstLoad(false);
      setSignal((prevSignal) => prevSignal + 1);
    }, 3000);
  };

  //setear resultados
  useEffect(() => {
    if (!firstLoad) {
      const orderedResults = [
        ...rows
          .filter((row) => row.position > 0 && row.position < 4)
          .map((row) => {
            const win =
              row.iconsArr[0].props.className ==
                row.iconsArr[1].props.className &&
              row.iconsArr[1].props.className ==
                row.iconsArr[2].props.className;
            return {
              pos: row.position,
              isAWinner: win,
              winningIcon: win ? row.iconsArr[0].props.className : "",
            };
          }),
      ].sort((a, b) => (a.pos > b.pos ? 1 : -1));
      setResults(orderedResults);
    }
  }, [signal]);

  //setear mensaje
  useEffect(() => {
    if (!firstLoad) {
      console.log(results);
      let winners = "";
      results.forEach((result) => {
        if (result.isAWinner) {
          const prize = winMultiplier(bet, result.winningIcon, result.pos);
          winners += `La fila ${result.pos} ganó: $${prize}!\n`;
        }
      });
      if (!winners) {
        winners = "Try again!";
      }
      setMsg(winners);
    }
  }, [results]);

  const winMultiplier = (bet, icon, row) => {
    let iconMultiplier = 0,
      rowMultiplier = 1;
    switch (icon.slice(5)) {
      case "html5":
        iconMultiplier = 2;
        break;
      case "css3":
        iconMultiplier = 3;
        break;
      case "bootstrap":
        iconMultiplier = 4;
        break;
      case "react":
        iconMultiplier = 5;
        break;
    }
    if (row === 2) {
      rowMultiplier = 2;
    }
    const winnings = iconMultiplier * bet * rowMultiplier;
    setCash((prevCash) => prevCash + winnings);
    return winnings;
  };

  return (
    <GlobalContext.Provider
      value={{
        rows,
        cash,
        bet,
        msg,
        difficulty,
        showModal,
        changeDifficulty,
        spin,
        showRules,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => {
  return React.useContext(GlobalContext);
};
