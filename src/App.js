// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   // Link
// } from "react-router-dom";
// import About from './Components/About';


function App() {
  // let a = "with Code with Harry"
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
    // setInterval(() => {
    //   document.title='Text Utility is amazing'
    // }, 2000);

    // setInterval(() => {
    //   document.title='Install Text Utility right now'
    // }, 1500);
  }
  return (
    <>
      {/* <Router> */}
        <Navbar Title="Text Utility Project" About="About project" Mode={mode} toggleMode={toggleMode} />
        {/* <About/> */}
        <div className="container">
          {/* <Routes>
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/" element={<TextForm heading="Enter the text to analyze" Mode={mode} />} /> */}
          {/* </Routes> */}
          <TextForm heading="Enter the text to analyze" Mode={mode} />
        </div>
       {/* </Router> */}
    </>
  );
}

export default App;
