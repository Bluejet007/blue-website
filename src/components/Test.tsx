import { GridProps } from "../data/types";

function Test({centreDotHandler, dotSizeHandler, gridSizeHandler}: GridProps) {
  //Centre dot
  const flipCentre = () => centreDotHandler[1](!centreDotHandler[0]);

  //Dot size
  const setDotSize = (e: any) => dotSizeHandler[1](e.target.value);

  //Grid size
  const setGridSize = (e: any) => gridSizeHandler[1](e.target.value);

  return (
    <div className="main-content">
      <p>From old roots<br />To new heights, to new horizons, to new skies<br />Spring new leaves</p>
      <form>
        <label htmlFor="buttn">Centre dot</label><br /><input type="checkbox" id="buttn" onChange={flipCentre} checked={centreDotHandler[0]}></input><br />
        <label htmlFor="dotSize">Dot size</label><br /><input type="range" id="dotSize" max="6" min="0.25" step="any" defaultValue={dotSizeHandler[0]} onChange={setDotSize}></input><br />
        <label htmlFor="latticeSize">Lattice size</label><br /><input type="range" id="latticeSize" max="100" min="2.5" step="any" defaultValue={gridSizeHandler[0]} onChange={setGridSize}></input>
      </form>
    </div>
  );
}

export default Test;