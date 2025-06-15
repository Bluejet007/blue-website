import Article from "./components/Article";

interface props {
  centreDotHandler: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
  dotSizeHandler: [number, React.Dispatch<React.SetStateAction<number>>]
  gridSizeHandler: [number, React.Dispatch<React.SetStateAction<number>>]
}

function App({centreDotHandler, dotSizeHandler, gridSizeHandler}: props) {
  //Centre dot
  const flipCentre = () => centreDotHandler[1](!centreDotHandler[0]);

  //Dot size
  const setDotSize = (e: any) => dotSizeHandler[1](e.target.value);

  //Grid size
  const setGridSize = (e: any) => gridSizeHandler[1](e.target.value);


  return <Article setCentreDot={flipCentre} setDotSize={setDotSize} setGridSize={setGridSize}/>;
}

export default App;