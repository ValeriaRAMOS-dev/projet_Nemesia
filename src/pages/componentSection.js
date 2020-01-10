import React from 'react';
import './componentSection.css'

const ComponentSection = props => {

  return(
      <div className="component">
          <h2>{props.title}</h2>
          <img src="" alt={props.alt}/>
          <p>{props.content}</p>
          <button onClick={props.onClick}>{props.button}</button>
      </div>
  )
};

export default ComponentSection;