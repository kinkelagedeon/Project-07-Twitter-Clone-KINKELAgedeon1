import React from "react";
import tweetphoto from "./../../images/image 1.svg"
import tweetImage from "./../../images/tweet-image.png"
import tweetVector from "./../../images/Verified.svg"
import TweetActions from "./tweet-actions"
function tweetTwo() {
    return (
       <div className="tweets">
         <div className="tweet">
            <div className="tweet-avatar">
                <img src={tweetphoto} alt="tweet-avatar" />
            </div>
            <div className="tweet-content">
                <div className="tweet-body">
                    <div className="tweet-title">
                        <h2 className="tweet-title-author">The New York Times</h2>
                        <img src={tweetVector} alt="" srcset="" /> 
                        <p className="tweet-title-details">@nytimes</p>
                        <p className="tweet-title-details">.</p>
                        <p className="tweet-title-details">2h</p>
                    </div>
                        <div className="tweet-text">
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid repellat mollitia eligendi eius quibusdam saepe ipsum consequuntur voluptate distinctio et vitae, provident quas sint sit deleniti laboriosam officiis veritatis nihil.</p>
                        </div>
                        <div className="tweet-image">
                            <img src={tweetImage} alt="" srcset="" />
                        </div>
                </div>
                  <div className="tweet-actions">
                    <TweetActions />
                  </div>
            </div>
            
         </div>
       </div>
    )
}

export default tweetTwo;