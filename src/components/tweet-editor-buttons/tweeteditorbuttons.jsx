import React from "react";
import media from "./../../images/Media.svg"
import gif from "./../../images/Gif.svg"
import poll from "./../../images/Poll.png"
import emoji from "./../../images/Emoji.svg"
import schedule from "./../../images/Schedule.svg"
function TweetEditorButtons() {
    return(
        <div className='tweet-editor-actions'>
            <img src={media} alt="" srcset="" />
            <img src={gif} alt="" srcset="" />
            <img src={poll} alt="" srcset="" />
            <img src={emoji} alt="" srcset="" />
            <img src={schedule} alt="" srcset="" />
        </div>
    )  
}
export default TweetEditorButtons;