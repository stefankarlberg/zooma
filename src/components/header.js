import React, { Component } from 'react';
import { LanguageContext } from '../context/LanguageContext.js';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  static contextType = LanguageContext
  render() { 
    const { content } = this.context;

    return ( 
      <div className="hero" title={content.hero.h1}>
      <div className="container-fluid-zooma">
         <h1 className="hero-title">{content.hero.h1}</h1>
     </div>
   </div>
     );
  }
}
 
export default Header;