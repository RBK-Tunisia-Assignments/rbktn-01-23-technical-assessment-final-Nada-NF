import React from "react";
import "../App.css"
import "../index.scss";

const Onerecepie = ({ one }) => {
  return (
    <div>
      <div className="receipe-content-area"  >
        <div className="container">
          <div className="header">
            <img className="img" />{one.recepie_Image}
         
          </div>
          <div className="text">
            <h1 className="food" >{one.recepie_Name}</h1>
            <i > 25 Mins</i>{one.Prep_Time}
            

            <p className="info">{one.recepie_Description}</p>
          </div>
        </div>
      </div>
      
    </div>
  );
};


export default Onerecepie;
