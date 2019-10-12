import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Header = (props) => {
  return (
    <div>
      <Jumbotron>
        <div className="container">
          <h1 className="jumbotron-title">Precision is calculated fascination</h1>
        </div>
      </Jumbotron>
    </div>
  );
};

export default Header;