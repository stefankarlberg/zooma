import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/nav.js'
import Header from './components/header.js'
import Intro from './components/intro.js'
import Blog from './components/blog.js'
import LastSection from './components/last_section.js'

function App() {
  return (
    <div className="App">
      <Menu/>
      <Header/>
      <Intro/>
      <Blog/>
      <LastSection/>
      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload1.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    
    </div>
  );
}

export default App;
