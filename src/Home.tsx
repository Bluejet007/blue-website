import Article from "./components/Article";
import { GridProps } from "./data/types";

function App(gridParams: GridProps) {
  return <Article centreDotHandler={gridParams.centreDotHandler} dotSizeHandler={gridParams.dotSizeHandler} gridSizeHandler={gridParams.gridSizeHandler}/>;
}

export default App;