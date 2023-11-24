import React from "react";
import reply from "./../../images/Reply.svg"
import Retweet from "./../../images/Retweet.svg"
import react from "./../../images/React.svg"
import TweetReplies from "./../../images/Tweet-Replies.svg"
function TweetActions() {
    return(
    <div className='tweet-editor-actions'>
        <img className="tweet-action" src={reply} alt="" srcset="" />
        <img className="tweet-action" src={Retweet} alt="" srcset="" />
        <img className="tweet-action" src={react} alt="" srcset="" />
        <img className="tweet-action" src={TweetReplies} alt="" srcset="" />
    </div>
    )  
}
export default TweetActions;