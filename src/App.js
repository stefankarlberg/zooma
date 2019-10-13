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
    </div>
  );
}

export default App;
