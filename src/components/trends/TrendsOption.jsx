import React from "react";

    function TrendsOptions({ active, text, src}) {
        return (
          <div className={`TrendsOptions ${active && "TrendsOptions--active"}`}>
            <img src={src}/>
            <h2>{text}</h2>
            <p>{text}</p>
          </div>
        );
      }

export default TrendsOptions;