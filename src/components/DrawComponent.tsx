import React, { useState } from "react";

export const DrawComponent = function () {
  const [points, setPoints] = useState<JSX.Element[]>([]);
  const handleMouseMove = function (e: React.MouseEvent) {
    let nPoint = points;

    if (points.length > 25 && nPoint.length > 0) nPoint = nPoint.slice(1);

    nPoint.push(
      <div
        key={e.clientX * e.clientY * Math.random()}
        className="Points"
        style={{
          marginLeft: `${e.clientX - 15}px`,
          marginTop: `${e.clientY - 50}px`,
          height: "10px",
          width: "10px",
          backgroundColor: `${
            "#" + Math.floor(Math.random() * 10000).toString(16)
          }`,
        }}
      />
    );

    setPoints(nPoint);
  };

  return (
    <div className="App" onMouseMove={handleMouseMove}>
      {points.map((e) => e)}
    </div>
  );
};
