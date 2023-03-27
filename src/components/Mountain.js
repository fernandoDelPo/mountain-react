import React from 'react';
import '../assets/stylesheets/Mountain.css'

function Mountain(props) {
  return(
    <div className='container-mountain'>
      <img 
        className='image-mountain'
        src={require(`../assets/images/${props.image}.jpg`)} 
        alt='Aconcagüa'/>
        <div className='container-text-mountain'>
          <p className='name-mountain'>{props.position}- {props.name} - {props.height} msnm</p>
          <p className='location-mountain'><strong> Ubicación:</strong> {props.location}</p>
          <p className='description-mountain'>{props.description}</p>
        </div>
    </div>
  );
}

export default Mountain;