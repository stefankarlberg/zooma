import React, {createContext, Component} from 'react';

export const LanguageContext = createContext();

class LanguageContextProvider extends Component {
  state = { 
    isSwedish: true,
    language: "swedish",
  }

  toggleLanguage = () => {
    this.setState({ isSwedish: !this.state.isSwedish });
  }


  setLanguage = (lang) => (e) => {
    this.setState({ language: lang });
    if (lang == "swedish"){
      this.setState({ isSwedish: true });
    } else {
      this.setState({ isSwedish: false });
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

// this.setState(prevState => ({ isSwedish: !prevState.isSwedish }));