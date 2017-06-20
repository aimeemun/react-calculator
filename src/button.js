import React from 'react';

const Button = (props) => {
    return (
      <span>
        <button type="button"
          className="Calculator-buttons"
          value={props.value}
          onClick={(e) => props.onClick(e.target.value)}>
            {props.value}
        </button>
      </span>
    );
}

export default Button;
