import React from "react";

const GoogleMap = () => {
  return (
    <div>
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            width="100%"
            height="400"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=E138, 4th Cross St, Block E, Delta I, Greater Noida, Uttar Pradesh 201308&t=&z=10&ie=UTF8&iwloc=&output=embed"
            scrolling="no"
          ></iframe>
         
        </div>
      </div>
    </div>
  );
};

export default GoogleMap;


