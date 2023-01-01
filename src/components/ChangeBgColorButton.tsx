import React from "react";

interface Props {
  setPoints: React.Dispatch<React.SetStateAction<JSX.Element[]>>
}

export const ChangeBgColorButton = function ({setPoints} : Props) {
  const handleBackgroundColorChange = function () {
    document.body.style.backgroundColor = `${
      "#" + Math.floor(Math.random() * 10000).toString(16)
    }`;

    setPoints([]);
  };

  return (
    <button className="btn" onClick={handleBackgroundColorChange} style={{zIndex: '1'}}>
      Change Background Color
    </button>
  );
};
