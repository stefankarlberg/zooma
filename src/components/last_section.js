import React from 'react';
import { Container } from 'reactstrap';
import serious from '../Serious-womanBW.jpg';
import trekant from '../trekanten.svg';
import fill from '../fill.svg';

const LastSection = (props) => {
  return (
    <div>
      <div className="last-section-image" style={{  
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
      </div>     
      <Container className="last-section-container"> 
        <div className="row last-section-row">
          <div className="col-lg-5 last-section-text-div">
            <h2 className="intro last-text-md mt-5">Add a touch as precise as personal</h2>
            <p className="intro last-w mt-5">
            Combine functionality with individuality by choosing the right frame for your face. Personalize your look, from classic and timeless designs to modern cool.
            </p>
          </div>
          <div className="col-lg-7 d-sm-none d-lg-block" style={{  
            backgroundImage: `url(${trekant})`,
            backgroundPosition: 'left',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat'
          }}>
          </div>
        </div>
      </Container>
        </div>
      
  );
}

export default LastSection;




// import React from 'react';
// import { Container } from 'reactstrap';
// import serious from '../Serious-womanBW.jpg';
// import trekant from '../trekanten.svg';
// import fill from '../fill.svg';

// const LastSection = (props) => {
//   return (
//     <div className="last-section-bgimage" style={{  
//       backgroundImage: `url(${serious})`,
//       backgroundPosition: 'center',
//       backgroundSize: 'cover',
//       backgroundRepeat: 'no-repeat',
//       }}>
//         <div className="" style={{  
//           backgroundImage: `url(${fill})`,
//           backgroundPosition: 'center',
//           backgroundSize: 'cover',
//           backgroundRepeat: 'no-repeat',
//           }}>
//           <Container>
//             <div className="d-xs-block d-lg-none" style={{  
//               backgroundImage: `url(${serious})`,
//               backgroundPosition: 'center',
//               backgroundSize: 'cover',
//               backgroundRepeat: 'no-repeat',
//               }}
//             >

//             </div>
//             <div className="row last-section-row">
//               <div className="col-md col-lg-5 last-section-text-div">
//                 <h2 className="intro last-text-md mt-5">Add a touch as precise as personal</h2>
//                 <p className="intro last-w mt-5">
//                 Combine functionality with individuality by choosing the right frame for your face. Personalize your look, from classic and timeless designs to modern cool.
//                 </p>
//               </div>
//               <div className="d-sm-none d-md-block col-lg-7" 
//                     style={{  
//                       backgroundImage: `url(${trekant})`,
//                       backgroundPosition: 'left',
//                       backgroundSize: 'contain',
//                       backgroundRepeat: 'no-repeat'
//                   }}
//               >
//               </div>
//             </div>
//         </Container>
//         </div>
//     </div>
//   );
// }

// export default LastSection;