import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Blog = (props) => {
  return (
    <div className="blog-section">
    <Container>

   


      <Row className="section_top_padding">
        <Col md="12" lg="4">
          <div class="row mb-5">
            <div class="col-md-6 col-lg-12"> 
              <div className="blog-image w-md-50"></div>
            </div>
            <div class="col-md-6 col-lg-12">
              <h3 className="blog">STAY COMFORTABLE</h3>
              <p className="blog">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean lacinia bibendum nulla sed consectetur.</p>
              <button></button>GO TO STAY COMFORTABLE
            </div>
          </div>
        </Col>
        <Col md="12" lg="4">
        <div class="row mb-5">
            <div class="col-md-6 col-lg-12"> 
              <div className="blog-image w-md-50"></div>
            </div>
            <div class="col-md-6 col-lg-12">
              <h3 className="blog">STAY COMFORTABLE</h3>
              <p className="blog">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean lacinia bibendum nulla sed consectetur.</p>
              <button></button>GO TO STAY COMFORTABLE
            </div>
          </div>
        </Col>
        <Col md="12" lg="4">
        <div class="row mb-5">
            <div class="col-md-6 col-lg-12"> 
              <div className="blog-image w-md-50"></div>
            </div>
            <div class="col-md-6 col-lg-12">
              <h3 className="blog">STAY COMFORTABLE</h3>
              <p className="blog">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean lacinia bibendum nulla sed consectetur.</p>
              <button></button>GO TO STAY COMFORTABLE
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default Blog;