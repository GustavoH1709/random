import React from "react";

interface Props {
  points: JSX.Element[]
  setPoints: React.Dispatch<React.SetStateAction<JSX.Element[]>>
}

export const DrawComponent = function ({points, setPoints} : Props) {
  const handleMouseMove = function (e: React.MouseEvent) {
    let nPoint = points;

    if (points.length > 50 && nPoint.length > 0) nPoint = nPoint.slice(1);

    nPoint.push(
      <div
        key={crypto.randomUUID()}
        className="Points"
        style={{
          marginLeft: `${e.clientX - 15}px`,
          marginTop: `${e.clientY - 50}px`,
          height: "10px",
          width: "10px",
          backgroundColor: `${
            "#" + Math.floor(Math.random() * 10000).toString(16)
          }`,
          boxShadow: "",
          zIndex:'-1'
        }}
      />
    );

    setPoints(nPoint);
  };

  return (
    <div className="App" onMouseMove={handleMouseMove}>
      {points}
    </div>
  );
};
