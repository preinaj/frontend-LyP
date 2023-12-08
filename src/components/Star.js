import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

function Star(props) {
    const numStarsGold = props.star.numStarsGold;
    const numStarsGrey = props.star.numStarsGrey;

    return (
        <div>
          <div>
          {[...Array(numStarsGold)].map((_, index) => (
          <FontAwesomeIcon key={index} icon={faStar} style={{ color: 'gold'}} />
        ))}
         {[...Array(numStarsGrey)].map((_, index) => (
          <FontAwesomeIcon key={index} icon={faStar} style={{ color: 'grey'}} />
        ))}

          </div>
        </div>
      );
}


export default Star;