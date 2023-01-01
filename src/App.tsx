import "./App.css";
import { DrawComponent } from './components/DrawComponent';
import { ChangeBgColorButton } from './components/ChangeBgColorButton';
import { useState } from "react";

function App() {

  const [points, setPoints] = useState<JSX.Element[]>([]);

  return (
    <>
      <ChangeBgColorButton setPoints={setPoints}/>
      <DrawComponent points={points} setPoints={setPoints}/>
    </>
  );
}

export default App;
