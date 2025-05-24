import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar'
import News from './components/News';
import LoadingBar from "react-top-loading-bar";

import {
 HashRouter, 
  Routes, 
  Route 
} 
from 'react-router-dom';


export default class App extends Component {
  state={
    progress:0
  }
  setProgress=(progress)=> {
this.setState({
  progress:progress
})
  }
  pageSize=7 ;
  apiKey = process.env.REACT_APP_NEWS_API_KEY;
  render() {
    return (
      <div>
           <HashRouter>
               <NavBar/>
               <LoadingBar
        color="#f11946"
        height={3}
        progress={this.state.progress }
      />
           <Routes>
  <Route path="/" element={<News setProgress={this.setProgress}apiKey={this.apiKey}key="General" pageSize={this.pageSize} country="us" category="General" />} />
  <Route path="/Business" element={<News setProgress={this.setProgress}apiKey={this.apiKey}key="Business" pageSize={this.pageSize} country="us" category="Business" />} />
  <Route path="/Entertainment" element={<News setProgress={this.setProgress}apiKey={this.apiKey}key="Entertainment" pageSize={this.pageSize} country="us" category="Entertainment" />} />
  <Route path="/General" element={<News setProgress={this.setProgress}apiKey={this.apiKey}key="General" pageSize={this.pageSize} country="us" category="General" />} />
  <Route path="/Health" element={<News setProgress={this.setProgress}apiKey={this.apiKey}key="Health" pageSize={this.pageSize} country="us" category="Health" />} />
  <Route path="/Science" element={<News setProgress={this.setProgress}apiKey={this.apiKey}key="Science" pageSize={this.pageSize} country="us" category="Science" />} />
  <Route path="/Sports" element={<News setProgress={this.setProgress}apiKey={this.apiKey}key="Sports" pageSize={this.pageSize} country="us" category="Sports" />} />
  <Route path="/Technology" element={<News setProgress={this.setProgress}apiKey={this.apiKey}key="Technology" pageSize={this.pageSize} country="us" category="Technology" />} />
</Routes>

          </HashRouter>
      </div> 
    ) 
  }  
}
