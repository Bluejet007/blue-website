import { useState } from 'react';
import '../styling/SettingsBox.css'

interface GridProps {
  centreDotHandler: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  dotSizeHandler: [number, React.Dispatch<React.SetStateAction<number>>];
  gridSizeHandler: [number, React.Dispatch<React.SetStateAction<number>>];
};

function SettingsBox({centreDotHandler, dotSizeHandler, gridSizeHandler}: GridProps) {
  // Box toggle
  const boxToggleHandler = useState(false);
  const toggleBox = (e: any) => (boxToggleHandler[1](!boxToggleHandler[0]), e.stopPropagation());

  //Centre dot
  const flipCentre = () => centreDotHandler[1](!centreDotHandler[0]);

  //Dot size
  const setDotSize = (e: any) => dotSizeHandler[1](e.target.value);

  //Grid size
  const setGridSize = (e: any) => gridSizeHandler[1](e.target.value);

  return <>
    <div className='settings-box' style={{transform: boxToggleHandler[0] ? 'translateY(-10px)' : 'translateY(100%)'}}>
      <button className={boxToggleHandler[0] ? 'settings-button-active' : 'settings-button-inactive'} aria-label='Close' onClick={toggleBox}>&nbsp;</button>
      <form className='settings-menu'>
        <label htmlFor='centreOn'>Centre dot</label><input type='checkbox' id='centreOn' onChange={flipCentre} checked={centreDotHandler[0]}></input><br />
        <label htmlFor='dotSize'>Dot size</label><br /><input type='range' id='dotSize' max='6' min='0.25' step='any' defaultValue={dotSizeHandler[0]} onChange={setDotSize}></input><br />
        <label htmlFor='latticeSize'>Lattice size</label><br /><input type='range' id='latticeSize' max='100' min='2.5' step='any' defaultValue={gridSizeHandler[0]} onChange={setGridSize}></input>
      </form>
    </div>
  </>;
}

export default SettingsBox;