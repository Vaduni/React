import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import NavBar from './components/NavBar'; 
import TextForm from './components/TextForm';
import React, { useState } from 'react';
function App() {
  const [mode, setMode] = useState('dark');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#0c2b3e';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#0c2b3e";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
   {/*  <Router> */}
  <NavBar title="TextCount" mode={mode} toggleMode={toggleMode} />
  <Alert alert={alert} />
  <div className="container my-3">
    <About/>
    {/*<Routes>
      <Route path="/about" element={<About />} />
      <Route path="/" element= "/">*/}
       <TextForm showAlert={showAlert} heading="Enter text to analyze" mode={mode} />

  {/*  </Routes>*/}
  </div>
 {/* </Router>
   */}
    </>
  );
}

export default App;
