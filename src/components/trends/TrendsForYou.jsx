import React from 'react'
import mora2 from "./../../images/More-2.svg"
import Settings from "./../../images/Settings.svg"


function TrendsForYou() {
  return (
    <div className="container-trends">
    <div className="Trends-for-you">
       <h2>Trends for you </h2>
       <img src={Settings}/>
    </div>

   <div className="list-Trends img">
        <span>Trending in Turkey<img src={mora2} /> </span> 
        <h2>#SQUID</h2>
        <p>2,066 Tweets</p>
   </div>

   <div className="list-Trends img">
        <span>Trending in Turkey<img src={mora2} /> </span> 
        <h2>#SQUID</h2>
        <p>2,066 Tweets</p>
   </div>

   <div className="list-Trends img">
        <span>Trending in Turkey<img src={mora2} /> </span> 
        <h2>#SQUID</h2>
        <p>2,066 Tweets</p>
   </div>

   <div className="list-Trends img">
        <span>Trending in Turkey<img src={mora2} /> </span> 
        <h2>#SQUID</h2>
        <p>2,066 Tweets</p>
   </div>
        <button className='button-You-Trends'> Show more </button>
  </div>

  )
}

export default TrendsForYou