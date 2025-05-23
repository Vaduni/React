import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import QuoteSection from "./components/QuoteSection";

import React, { useState } from "react";

import { HashRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#11181d";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#0c2b3e";
    }
  };

  return (
    <>
      {/*  <Router> 
  <NavBar title="TextCount" mode={mode} toggleMode={toggleMode} />
  <Alert alert={alert} />
  <div className="container my-3">
    <About/>
   <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/" element= "/">
       <TextForm showAlert={showAlert} heading="Enter text to analyze" mode={mode} />

  </Routes>
  </div>
  </Router>
   */}

      <HashRouter>
        <NavBar title="TextCount" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <QuoteSection mode={mode} />
        <div className="container my-3">
          <Routes>
          <Route path="/about" element={<About mode={mode} />} />
            <Route
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading=" Track your words, Polish your message! "
                  mode={mode}
                />
              }
            />
  
          </Routes>
        </div>
        <Footer/>
      </HashRouter>
    </>
  );
}

export default App;
