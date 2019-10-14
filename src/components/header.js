import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import bg from '../bg_image2.png';

const Header = (props) => {
  return (
    <div>
      <Jumbotron style={{  
        backgroundImage: `url(${bg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}>
        <div className="container">
          <h1 className="jumbotron-title">Precision is calculated fascination</h1>
        </div>
      </Jumbotron>
    </div>
  );
};

export default Header;