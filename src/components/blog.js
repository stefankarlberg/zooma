import React from 'react';
import { Row, Col } from 'reactstrap';
import arrow from '../arrow.svg';
import image from '../blog.png';

const Blog = (props) => {
  return (
    <div className="blog-section">
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
              <div className="blog-read-more"><a href="#"><img src={arrow} className="button_arrow" ></img>Go stay comfortable</a></div>
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
              <div className="blog-read-more"><a href="#"><img src={arrow} className="button_arrow" ></img>Go to better vision</a></div>
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
              <div className="blog-read-more"><a href="#"><img src={arrow} className="button_arrow" ></img>Go to healthier eyes</a></div>
            </div>
          </div>
        </Col>
        
      </Row>           

    </div>
    </div>
  );
}

export default Blog;