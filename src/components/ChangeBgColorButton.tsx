import React from "react";

export const ChangeBgColorButton = function () {
  const handleBackgroundColorChange = function () {
    document.body.style.backgroundColor = `${
      "#" + Math.floor(Math.random() * 10000).toString(16)
    }`;
  };

  return (
    <button className="btn" onClick={handleBackgroundColorChange}>
      Change Background Color
    </button>
  );
};
