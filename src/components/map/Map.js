import React from "react";
import "./Map.css";

const Map = ({ name, city }) => {
  const API = "AIzaSyBCqRTKTY4Bah-hiKFocaUiyEl-2RKcoC4";
  return (
    <div className='map-container'>
      <iframe
        title='map'
        width='300'
        height='300'
        loading='lazy'
        allowfullscreen
        referrerpolicy='no-referrer-when-downgrade'
        src={`https://www.google.com/maps/embed/v1/place?key=${API}&q=${name}, ${city}`}
      ></iframe>
    </div>
  );
};

export default Map;
