import React, { Component }  from 'react';
import { Row, Col } from 'reactstrap';
import { LanguageContext } from '../context/LanguageContext.js';


class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  static contextType = LanguageContext
  
  render() { 
    const { content } = this.context;
    
    return ( 
      <div className="container-fluid-zooma">
      <Row className="mt-md-5 pt-md-5 mb-5 pb-5">
        <Col className="pl-0 pr-0" lg="5">
          <h2 className="intro">{content.intro.h3}</h2>
        </Col>
        <Col lg="7" className="px-0">
          <p className="intro mt-3">
          {content.intro.p}
          </p>
          <p className="intro">
          {content.intro.p1}</p>
        </Col> 
      </Row>
    </div>
     );
  }
}
 
export default Intro;