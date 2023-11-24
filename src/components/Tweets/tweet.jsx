import React from "react";
import tweetprofilephoto from "./../../images/tweet-profile-photo.png"
import tweetVector from "./../../images/Vector.svg"
import reply from "./../../images/Reply.svg"
import Retweet from "./../../images/Retweet.svg"
import react from "./../../images/React.svg"
import TweetReplies from "./../../images/Tweet-Replies.svg"
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
                        <div className='tweet-editor-actions'>
                            <span className="tweet-action"><img src={reply} alt="" srcset="" />255</span>
                            <span className="tweet-action"><img src={Retweet} alt="" srcset="" />1455</span>
                            <span className="tweet-action"><img src={react} alt="" srcset="" />5550</span>
                            <span className="tweet-action"><img src={TweetReplies} alt="" srcset="" /></span>
                        </div>
            </div>
        </div> 
    </div>
     <Tweet2 />
</div>
    )
}

export default Tweet;