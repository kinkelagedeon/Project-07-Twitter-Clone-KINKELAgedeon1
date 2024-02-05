import React from 'react'
import tweetVector from "./../../images/Verified.svg"
import NyTimes from "./../../images/Times-Profile-Photo.svg"
import TwittirProfile from "./../../images/Twitter-Profile-Photo.svg"
import Profilecnn from "./../../images/Profile-PhotoP.svg"


function TrendsFollow() {
  return (
    <div className='TrendsFollow-container'> 
          <h2>Who to follow</h2>
        <div className='tweet--avatar'>
           <img width={50}  src={NyTimes} alt="tweet-avatar" />
           <p>The New York Times <img src= {tweetVector}/></p>
           <button className='buttonFollow'> Follow </button>
           
        </div> 

        <div className='tweet--avatar'>
           <img width={50}  src={Profilecnn} alt="tweet-avatar" />
           <p> CNN <img src= {tweetVector}/></p>
           <button className='buttonFollow'> Follow </button>
        </div> 

        <div className='tweet--avatar'>
           <img width={50}  src={TwittirProfile} alt="tweet-avatar" />
           <p>Twitter<img src= {tweetVector}/></p>
           <button className='buttonFollow'> Follow </button>
        </div>

        <button className='button-You-Trends'> Show more </button> 
        
    </div>
  )
}

export default TrendsFollow