import React from 'react';
import { Container } from 'reactstrap';
import serious from '../Serious-womanBW.jpg';
import trekant from '../trekanten3.png';
import fill from '../fill2.svg';

class LastSection extends React.Component {
  constructor(props){
    super(props)
    this.state = { height: 0 };
    this.updateHeight = this.updateHeight.bind(this);
  }
  
  componentDidMount() {
    this.updateHeight();
    window.addEventListener("resize", this.updateHeight);
  }
 
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateHeight);
  }
 
  componentDidUpdate() {
    this.updateHeight();
  }
 
  updateHeight() {
    if (this.state.height != this.div.clientHeight)
      this.setState({ height: this.div.clientHeight })
      console.log(this.state.height)
  }

 
 
  render () {
    const adjustHeight = this.state.height + 1;
    
    return (
      <div>
      <div className="last-section-image" style={{  
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
          <h2 className="last-section">Add a touch as precise as personal</h2>
          <p className="last-section last-w">
          Combine functionality with individuality by choosing the right frame for your face. Personalize your look, from classic and timeless designs to modern cool.
          Combine functionality with individuality by choosing the right frame for your face. Personalize your look, from classic and timeless designs to modern cool.
        
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

