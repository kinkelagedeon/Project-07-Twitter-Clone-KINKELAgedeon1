import React from "react";

    function TrendsOptions({ active, text, src}) {
        return (
          <div className={`TrendsOptions ${active && "TrendsOptions--active"}`}>
            <img src={src}/>
            <h2>{text}</h2>
          </div>
        );
      }

export default TrendsOptions;