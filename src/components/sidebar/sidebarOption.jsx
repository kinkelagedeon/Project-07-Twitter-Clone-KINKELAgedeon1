import React from "react";


function SidebarOption({ active, text, src}) {
  return (
    <div className={`SidebarOption ${active && "SidebarOption--active"}`}>
      <img src={src}/>
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOption;