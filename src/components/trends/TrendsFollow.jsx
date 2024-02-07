import React from 'react'
import tweetVector from "./../../images/Verified.svg"
import NyTimes from "./../../images/Times-Profile-Photo.svg"
import TwittirProfile from "./../../images/Twitter-Profile-Photo.svg"
import Profilecnn from "./../../images/Profile-PhotoP.svg"


function TrendsFollow() {
  return (

    <div  className='TrendsFollow-container'>

     <div className='TrendsFollow'><h2>Who to follow</h2></div>

        <div className='list-TrendsFollow'>
           <div className=''><img width={50}  src={NyTimes} alt="tweet-avatar" /></div>
           <div>The New York Times <img src= {tweetVector} /> <p>@nytimes</p> </div>
           <div>  <button className='buttonFollow'> Follow </button></div> 
        </div>

        <div className='list-TrendsFollow'>
           <div><img width={50}  src={Profilecnn} alt="tweet-avatar" /></div>
           <div>CNN <img src= {tweetVector} /> <p>@cnn</p> </div>
           <div>  <button className='buttonFollow'> Follow </button></div> 
        </div>

        <div className='list-TrendsFollow'>
           <div><img width={50} src={TwittirProfile} alt="tweet-avatar" /></div>
           <div>Twitter <img src= {tweetVector} /> <p>@twitter</p> </div>
           <div><button className='buttonFollow'> Follow </button></div> 
        </div>

        <button className='button-You-Trends'> Show more </button>

    </div>

  )
}

export default TrendsFollow