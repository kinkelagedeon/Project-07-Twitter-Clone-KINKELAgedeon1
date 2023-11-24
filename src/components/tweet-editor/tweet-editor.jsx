import React from 'react';
import profilephoto from "./../../images/profile-photo.png"
import TweetEditorButtons from '../tweet-editor-buttons/tweeteditorbuttons';
function TweetEditor() {
    return(
        <div className='tweet-editor'>
            <img className="avatar" src={profilephoto} alt="" srcset="" />

            <div className='tweet-editor-form'>
                <input className='tweet-editor-input' type="text" placeholder="What'shappening?"/>
                <div className="tweet-editor-buttons">
                    <TweetEditorButtons/>
                    <button className='button'>
                        Tweet
                    </button>
                </div> 
            </div>
        </div>
    )   
}

export default TweetEditor;