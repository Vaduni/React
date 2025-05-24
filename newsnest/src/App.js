import './App.css';
import React,{useState} from 'react'
import NavBar from './components/NavBar'
import News from './components/News';
import LoadingBar from "react-top-loading-bar";

import {HashRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  const [progress, setProgress] = useState(0);
  const pageSize = 7;
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;

  return (
    <div>
      <HashRouter>
        <NavBar />
        <LoadingBar
          color="#f11946"
          height={3}
          progress={progress}
        />
        <Routes>
          <Route path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="General" pageSize={pageSize} country="us" category="General" />} />
          <Route path="/Business" element={<News setProgress={setProgress} apiKey={apiKey} key="Business" pageSize={pageSize} country="us" category="Business" />} />
          <Route path="/Entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="Entertainment" pageSize={pageSize} country="us" category="Entertainment" />} />
          <Route path="/General" element={<News setProgress={setProgress} apiKey={apiKey} key="General" pageSize={pageSize} country="us" category="General" />} />
          <Route path="/Health" element={<News setProgress={setProgress} apiKey={apiKey} key="Health" pageSize={pageSize} country="us" category="Health" />} />
          <Route path="/Science" element={<News setProgress={setProgress} apiKey={apiKey} key="Science" pageSize={pageSize} country="us" category="Science" />} />
          <Route path="/Sports" element={<News setProgress={setProgress} apiKey={apiKey} key="Sports" pageSize={pageSize} country="us" category="Sports" />} />
          <Route path="/Technology" element={<News setProgress={setProgress} apiKey={apiKey} key="Technology" pageSize={pageSize} country="us" category="Technology" />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
