import React from 'react';
import serious from '../Serious-womanBW.jpg';
import fill from '../fill2.svg';
import { LanguageContext } from '../context/LanguageContext.js';

class LastSection extends React.Component {
  constructor(props){
    super(props)
    this.state = { height: 0 };
    this.updateHeight = this.updateHeight.bind(this);
  }

  static contextType = LanguageContext
  
  componentDidMount() {
    this.updateHeightFirst();
    window.addEventListener("resize", this.updateHeight);
    console.log(this.state.height)
  }
 
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateHeight);
  }
 
  componentDidUpdate() {
    this.updateHeight();
    console.log(this.state.height)
   
  }
 
  updateHeight() {
    if (this.state.height !== this.div.clientHeight)
      this.setState({ height: this.div.clientHeight })
  }

  

  updateHeightFirst() {
    if (this.state.height !== this.div.clientHeight);
      let initialheight =  this.div.clientHeight + 143
      this.setState({ height: initialheight})
  }

  render () {
   
    const { content } = this.context;
    
    return (
      <div>
      <div title={content.last.h2} className="last-section-image" style={{  
        backgroundImage: `url(${serious})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: `${this.state.height }px`,
      }}>
        <div className="last-section-fill" style={{  
          backgroundImage: `url(${fill})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: `${this.state.height }px`,
        }}>
        </div>
      </div>  
      <div className="container-fluid-zooma last-section-bg">
          
      <div ref={ div => { this.div = div; } } className="row last-section-row" 
        style={{  
          marginTop: `-${this.state.height }px`,
        }}
        >
        <div className="col-lg-5 last-section-left-col ml-0 pl-0 pr-0">
          <h2 className="last-section">{content.last.h2}</h2>
          <p className="last-section last-w">
          {content.last.p}
          </p>
        </div>
        <div className="col-7 d-none d-lg-block last-section-diagonal">
        </div>
      </div>

      </div>
    </div>
    )
  }
}


export default LastSection;

