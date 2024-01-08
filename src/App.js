import React, { createContext, useState, useEffect } from 'react';
import SharedLayout from './components/SharedLayout';
import Home from './components/Home';
import './index.css';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState('Dark');
  const [line, setLine] = useState('white');
  const [isDarkMode, setDarkMode] = useState(true);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
    if (isDarkMode === true) {
      setTheme('Light');
      setLine('black');
    } else {
      setTheme('Dark');
      setLine('white');
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array means this effect runs once after the initial render
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [liveSiteText, setLiveSiteText] = useState('');
  const [sourceCodeText, setSourceCodeText] = useState('');

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const isSmallScreen = windowWidth < 1200;
  const isMediumScreen = windowWidth < 1683;
  useEffect(() => {
    if (windowWidth < 1300) {
      setLiveSiteText('');
      setSourceCodeText('');
    } else {
      setLiveSiteText('Live');
      setSourceCodeText('Project');
    }
  }, [windowWidth]);

  return (
    <ThemeContext.Provider>
      <div className="App" id={theme.toLowerCase()}>
        <SharedLayout isMediumScreen={isMediumScreen} isSmallScreen={isSmallScreen} windowSize={windowWidth} windowWidth={windowWidth} onChange={toggleDarkMode} checked={isDarkMode} />
        <Home isDarkMode={isDarkMode} theme={line} isMediumScreen={isMediumScreen} isSmallScreen={isSmallScreen} windowSize={windowWidth} windowWidth={windowWidth} sourceCodeText={sourceCodeText} liveSiteText={liveSiteText} />
        {/* <div style={{"color": 'white'}}>
          Here - Window Size: {windowSize.width} x {windowSize.height}
        </div> */}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
