import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';



function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#212529'
      document.title = 'Text Utility - Dark Mode'
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.title = 'Text Utility - Light Mode'
    }
  }
  return (
    <>
        <Navbar Title="Text Utility Project" About="About project" Mode={mode} toggleMode={toggleMode} />
        <div className="container">
          <TextForm heading="Enter the text to analyze" Mode={mode} />
        </div>
    </>
  );
}

export default App;
