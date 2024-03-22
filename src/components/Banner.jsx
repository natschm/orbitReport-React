// components/Banner.jsx

import React from 'react'; //refers back to react package

function Banner() {  //accepts props ans an input and return react elements as to what shoudl be shown on screen. 
  return (  //returns header element and paragraph
    <header>
      <h1>Orbit Report</h1>
      <p>Click on the buttons to see the satellites in that orbit type</p>
    </header>
  );
}

export default Banner; //exports banner component