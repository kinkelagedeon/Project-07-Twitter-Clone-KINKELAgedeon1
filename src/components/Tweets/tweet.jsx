import React from "react";
import tweetprofilephoto from "./../../images/tweet-profile-photo.png"
import tweetVector from "./../../images/Vector.svg"
import TweetActions from "../Tweets/tweetactions"
import Tweet2 from "./tweet2";
// import Tweet1 from "./tweet";
function Tweet() {
    return (
      <div className="tweets">
      <div className="tweet">
         <div className="tweet-avatar">
             <img src={tweetprofilephoto} alt="tweet-avatar" />
         </div>
         <div className="tweet-content">
             <div className="tweet-body">
                 <div className="tweet-title">
                     <h2 className="tweet-title-author">CNN</h2>
                     <img src={tweetVector} alt="" srcset="" /> 
                     <p className="tweet-title-details">@CNN</p>
                     <p className="tweet-title-details">.</p>
                     <p className="tweet-title-details">7m</p>
                 </div>
                     <div className="tweet-text">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid repellat mollitia eligendi eius quibusdam saepe ipsum consequuntur voluptate distinctio et vitae, provident quas sint sit deleniti laboriosam officiis veritatis nihil.</p>
                     </div>
                <TweetActions />
            </div>
        </div> 
    </div>
     <Tweet2 />
     {/* <Tweet1 /> */}
</div>
    )
}

export default Tweet;