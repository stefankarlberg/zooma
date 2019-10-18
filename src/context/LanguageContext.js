import React, {createContext, Component} from 'react';
import jsonData from './content_en.json';
 import jsonDataSE from './content_se.json';

export const LanguageContext = createContext();

class LanguageContextProvider extends Component {
  state = { 
    isSwedish: true,
    language: "swedish",
    content: jsonDataSE, 
  }

  toggleLanguage = () => {
    this.setState({ isSwedish: !this.state.isSwedish });
  }


  setLanguage = (lang) => (e) => {
    this.setState({ language: lang });
    if (lang === "swedish"){
      this.setState({ isSwedish: true });
      this.setState({ content: jsonDataSE });
    } else {
      this.setState({ isSwedish: false });
      this.setState({ content: jsonData });
    }
  }


  render() { 
    return (  
      <LanguageContext.Provider value={{...this.state, setLanguage: this.setLanguage }}>
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}
 
export default LanguageContextProvider;