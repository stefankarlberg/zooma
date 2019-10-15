import React from 'react';
import { Container } from 'reactstrap';
import serious from '../Serious-womanBW.jpg';
import trekant from '../trekanten3.png';
import fill from '../fill2.svg';

class LastSection extends React.Component {
  constructor(props){
    super(props)
    this.diagonal = React.createRef();
  }
  
  

  componentDidMount () {
    let rcol = this.diagonal.current.offsetHeight;
    let WidthDiagonal = (rcol / 10);
    console.log(WidthDiagonal);
  }

  render () {
    const WidthDiagonal = 60;
    const rcol = 500;
    return (
      <div>
      {/* <div className="last-section-image" style={{  
        backgroundImage: `url(${serious})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}>
        <div className="last-section-fill" style={{  
          backgroundImage: `url(${fill})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}>
        </div>
        <div className="last-section-bgcolor"></div>
      </div>   */}
      <div className="container-fluid-zooma">
          
     <div ref={this.diagonal} className="row last-section-row">
            <div className="col-5 last-section-left-col ml-0">
              <h2 className="last-section-text">Add a touch as precise as personal</h2>
              <p className="intro last-w mt-5 ml-0">
              Combine functionality with individuality by choosing the right frame for your face. Personalize your look, from classic and timeless designs to modern cool.
              Combine functionality with individuality by choosing the right frame for your face. Personalize your look, from classic and timeless designs to modern cool.
              Combine functionality with individuality by choosing the right frame for your face. Personalize your look, from classic and timeless designs to modern cool.
              Combine functionality with individuality by choosing the right frame for your face. Personalize your look, from classic and timeless designs to modern cool.
           
              </p>
            </div>
            <div className="col-7 d-sm-none d-lg-block last-section-diagonal" style={{  
          backgroundImage: `-webkit-linear-gradient(159deg, #c5c5c500 ${WidthDiagonal}%, #dbdbdb 50%), url(${serious})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}>
            </div>
          </div>

      </div>
    </div>
    )
  }
}




export default LastSection;

