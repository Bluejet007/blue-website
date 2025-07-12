import './styling/MainStylesheet.css';
import ArticleGrid from './components/ArticleGrid';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import CrumbyRow from './components/CrumbyRow';
import Header from './components/Header';
import NavMenu from './components/NavMenu';
import { Suspense, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';
import FileUploader from './components/FileUploader';
import navData from './data/navData';

const GridBG = React.lazy(() => import('./components/GridBG'));

function App() {
  const queryClient = new QueryClient();

  /* Background States */

  //Centre dot
  const centreDotHandler = useState(false);

  //Dot size
  const dotSizeHandler = useState(1.25);

  //Grid size
  const gridSizeHandler = useState(25);

  return (
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools />
    <Router>
      <div className="page-container">
      <NavMenu navData={navData}/>
      <Header />
      <CrumbyRow path={["Test", "Here", "There"]}/>
        <Routes>
          <Route path="/" element={<Home centreDotHandler={centreDotHandler} dotSizeHandler={dotSizeHandler} gridSizeHandler={gridSizeHandler}/>} />
          <Route path="articles" element={<ArticleGrid />} />
          <Route path="upload" element={<FileUploader />} />
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </Router>
    <Suspense>
      <GridBG isCentre={centreDotHandler[0]} dotSize={dotSizeHandler[0]} gridSize={gridSizeHandler[0]}/>
    </Suspense>
  </QueryClientProvider>
  );
}

export default App;