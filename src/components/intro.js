import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Intro = (props) => {
  return (
    <Container>
      <Row className="mt-md-5 pt-md-5">
        <Col lg="5">
          <h2 className="intro">Precisely you</h2>
        </Col>
        <Col lg="7">
          <p className="intro">
            .It is time you started to see things clearly again and focus on yourself. ‘’Yourself’’ meaning your eyes, your look, and your vision. 
          </p>
          <p className="intro">
            Company frames and lenses are designed to perfectly match each other and complement your look and vision – flawlessly integrating striking aesthetics with visual excellence.
          </p>
        </Col> 
      </Row>
    </Container>
  );
}

export default Intro;