import './styling/MainStylesheet.css';
import ArticleGrid from './components/ArticleGrid';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import GridBG from './components/GridBG';
import CrumbyRow from './components/CrumbyRow';
import Header from './components/Header';
import NavMenu from './components/NavMenu';
import { useState } from 'react';

function App() {
  /* Background States */

  //Centre dot
  const centreDotHandler = useState(false);

  //Dot size
  const dotSizeHandler = useState(1.25);

  //Grid size
  const gridSizeHandler = useState(25);

  return (
  <>
    <GridBG isCentre={centreDotHandler[0]} dotSize={dotSizeHandler[0]} gridSize={gridSizeHandler[0]}/>
    {/* <NavMenu navData={navData}/> */}
    <Router>
      <div className="page-container">
      <NavMenu navData={[{name: "Test", path: "/"}, {name: "Here", path: "/"}, {name: "There", path: "articles"}]}/>
      <Header />
      <CrumbyRow path={["Test", "Here", "There"]}/>
        <Routes>
          <Route path="/" element={<Home centreDotHandler={centreDotHandler} dotSizeHandler={dotSizeHandler} gridSizeHandler={gridSizeHandler}/>} />
          <Route path="articles" element={<ArticleGrid />} />
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </Router>
  </>
  );
}

export default App;