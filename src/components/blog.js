import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import arrow from '../arrow.svg';
import image from '../blog.png';

const Blog = (props) => {
  return (
    <div className="blog-section">
    <Container>
      <Row className="blog-row">
        <Col md="12" lg="4">
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
              <h3 className="blog">STAY COMFORTABLE</h3>
              <p className="blog">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
              <div className="blog-space"></div>
              <div className="blog-read-more"><a href="#"><img src={arrow} className="button_arrow" ></img>GO TO STAY COMFORTABLE</a></div>
            </div>
          </div>
        </Col>
        <Col md="12" lg="4">
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
              <h3 className="blog">PRIORITIZE BOTH YOUR EYES AND YOUR BACK</h3>
              <p className="blog">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
              <div className="blog-space"></div>
              <div className="blog-read-more"><a href="#"><img src={arrow} className="button_arrow" ></img>GO TO BETTER VISION</a></div>
            </div>
          </div>
        </Col>
        <Col md="12" lg="4">
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
              <h3 className="blog">HEALTHIER EYES</h3>
              <p className="blog">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
              <div className="blog-space"></div>
              <div className="blog-read-more"><a href="#"><img src={arrow} className="button_arrow" ></img>GO TO HEALTHIER EYES</a></div>
            </div>
          </div>
        </Col>
        
      </Row>           




      {/* <Row>
        <Col md="12" lg="4">
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
              <h3 className="blog">STAY COMFORTABLE</h3>
              <p className="blog">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
              <div className="blog-space"></div>
              <div className="blog-read-more"><a href="#"><img src={arrow} className="button_arrow" ></img>GO TO STAY COMFORTABLE</a></div>
            </div>
          </div>
        </Col>
        <Col md="12" lg="4">
          <div className="card h-100 card-body card-blog">
            <h3 className="blog">PRIORITIZE BOTH YOUR EYES AND YOUR BACK</h3>
            <p className="blog">Morbi leo risus, porta ac consectetur ac</p>
            <div className="blog-read-more"><a href="#"><img src={arrow} className="button_arrow" ></img>GO TO BETTER VISION</a></div>
          </div>
        </Col>
        <Col md="12" lg="4">
          <div className="card h-100 card-body card-blog">
            <h3 className="blog">HEALTHIER EYES</h3>
            <p className="blog">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
            <div className="blog-read-more"><a href="#"><img src={arrow} className="button_arrow" ></img>GO TO HEALTHIER EYES</a></div>
          </div>
        </Col>
        
      </Row>     */}


    </Container>
    </div>
  );
}

export default Blog;