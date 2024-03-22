import React from 'react';
import satData from '../components/satData'; 

const Buttons = ({ filterByType, setSat, displaySats }) => {
  return (
    <div>
      {/* Buttons for each unique orbit type */}
      <div>
        {displaySats.map((sat, id) => (
          <button key={id} onClick={() => filterByType(sat)}>
            {sat} Orbit
          </button>
        ))}
      </div>

      {/* Button for All Orbits */}
      <button onClick={() => setSat(satData)}>All Orbits</button>
    </div>
  );
};

export default Buttons;
