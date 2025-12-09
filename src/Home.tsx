import Test from "./components/Test";
import { GridProps } from "./data/types";

function App(gridParams: GridProps) {
  return <Test centreDotHandler={gridParams.centreDotHandler} dotSizeHandler={gridParams.dotSizeHandler} gridSizeHandler={gridParams.gridSizeHandler}/>;
}

export default App;