// components/CustomTextField.js
import React from 'react';


function CustomTextField({ label, placeholder, value, onChange, onFocus, onBlur }) {
    return (
      <div>
        <label>{label}</label>
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
        
        />
      </div>
    );
  }
  
export default CustomTextField;
