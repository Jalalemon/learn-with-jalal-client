import React from 'react';
import './Toggle.css'
const Toggle = () => {
    return (
        <div className='d-flex'>
          <p>Light</p>
          <label className="swith" id="model-red">
            <input type="checkbox" />
            <span className="slider" />
            
          </label>
          <p>Dark</p>
      </div>
    );
};

export default Toggle;