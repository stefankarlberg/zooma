import React from 'react';
import './App.css';
import Menu from './components/nav.js'
import Header from './components/header.js'
import Intro from './components/intro.js'
import Blog from './components/blog.js'
import LastSection from './components/last_section.js'
import LanguageContextProvider from './context/LanguageContext.js'

function App() {
  return (
    <LanguageContextProvider>
    <div className="App">
        <Menu/>
        <Header/>
        <Intro/>
        <Blog/>
        <LastSection/>
        </div>
        </LanguageContextProvider>
  
  );
}

export default App;
