import './MainStylesheet.css';
import Header from "./components/Header";
import Article from "./components/Article";
import GridBG from "./components/GridBG";
import CrumbyRow from './components/CrumbyRow';
import NavMenu from './components/NavMenu';
import { useState } from "react";

function App() {
  /* Background States */

  //Centre dot
  const centreDotHandler = useState(false);
  const flipCentre = () => centreDotHandler[1](!centreDotHandler[0]);

  //Dot size
  const dotSizeHandler = useState(1.25);
  const setDotSize = (e: any) => dotSizeHandler[1](e.target.value);

  //Grid size
  const gridSizeHandler = useState(25);
  const setGridSize = (e: any) => gridSizeHandler[1](e.target.value);


  return (
  <>
    <GridBG isCentre={centreDotHandler[0]} dotSize={dotSizeHandler[0]} gridSize={gridSizeHandler[0]}/>
    {/* <NavMenu navData={navData}/> */}
    <div className="page-container">
      <NavMenu navData={[{name: "Test", path: "/"}, {name: "Here", path: "/"}, {name: "There", path: "/"}]}/>
      <Header />
      <CrumbyRow path={["Test", "Here", "There"]}/>
      <Article setCentreDot={flipCentre} setDotSize={setDotSize} setGridSize={setGridSize}/>
    </div>
  </>
  );
}

export default App;