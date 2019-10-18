import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import arrow from '../arrow.svg';
import image from '../blog.png';
import { LanguageContext } from '../context/LanguageContext.js';

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  static contextType = LanguageContext

  render() { 

    const { isSwedish } = this.context;
    
    return ( 
      <div className={`${isSwedish ? "blog-section-hide" : "blog-section"}`} >
      <div className="container-fluid-zooma">
      <Row className="blog-row">
        <Col className="px-0 pl-lg-0 pr-lg-3 mb-4" md="12" lg="4">
          <div className="card h-100 card-body card-blog">
            <div className="blog-image float-md-left" 
              style={{  
                  backgroundImage: `url(${image})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat'
              }}>
            </div>
            <div className="float-right card-info">
              <h3 className="blog">Stay comfortable</h3>
              <p className="blog">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
              <div className="blog-space"></div>
              <div className="blog-read-more"><a href="wwww.zooma.se"><img src={arrow} alt="Stay comfortable" className="button_arrow" ></img>Go stay comfortable</a></div>
            </div>
          </div>
        </Col>
        <Col className="px-0 px-lg-3 mb-4" md="12" lg="4">
          <div className="card h-100 card-body card-blog">
            <div className="blog-image float-md-left" 
              style={{  
                  backgroundImage: `url(${image})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat'
              }}>
            </div>
            <div className="float-right card-info">
              <h3 className="blog">Prioritize both your eyes and your back</h3>
              <p className="blog">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
              <div className="blog-space"></div>
              <div className="blog-read-more"><a href="wwww.zooma.se"><img src={arrow} alt="Prioritize both your eyes and your back" className="button_arrow" ></img>Go to better vision</a></div>
            </div>
          </div>
        </Col>
        <Col className="px-0 pl-lg-3 pr-lg-0 mb-4" md="12" lg="4">
          <div className="card h-100 card-body card-blog">
            <div className="blog-image float-md-left" 
              style={{  
                  backgroundImage: `url(${image})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat'
              }}>
            </div>
            <div className="float-right card-info">
              <h3 className="blog">Healthier eyes</h3>
              <p className="blog">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
              <div className="blog-space"></div>
              <div className="blog-read-more"><a href="wwww.zooma.se"><img src={arrow} alt="Healthier eyes" className="button_arrow" ></img>Go to healthier eyes</a></div>
            </div>
          </div>
        </Col>
        
      </Row>           

    </div>
    </div>
     );
  }
}
 
export default Blog;