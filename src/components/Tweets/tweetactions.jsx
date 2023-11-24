import React from "react";
import reply from "./../../images/Reply.svg"
import Retweet from "./../../images/Retweet.svg"
import react from "./../../images/React.svg"
import TweetReplies from "./../../images/Tweet-Replies.svg"
function TweetActions() {
    return(
    <div className='tweet-editor-actions'>
        <span className="tweet-action"><img src={reply} alt="" srcset="" />255</span>
        <span className="tweet-action"><img src={Retweet} alt="" srcset="" />1000</span>
        <span className="tweet-action"><img src={react} alt="" srcset="" />5550</span>
        <span className="tweet-action"><img src={TweetReplies} alt="" srcset="" /></span>
    </div>
    )  
}
export default TweetActions;