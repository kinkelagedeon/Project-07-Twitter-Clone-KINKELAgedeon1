import React, { createFactory } from "react";
import Twitter from "./../../images/Twitter.svg"
import Home from "./../../images/Home-Fill.svg"
import Explore from "./../../images/Explore.svg"
import Notifications from "./../../images/Notifications.svg"
import Messages from "./../../images/Messages.svg"
import Bookmarks from "./../../images/Bookmarks.svg"
import Lists from "./../../images/Lists.svg"
import Profile from "./../../images/Profile.svg"
import More from "./../../images/More.svg"
function SideBar() {
    return(
        <>
        <div className="SedeaBar">
            <img src={Twitter} alt="" className="tweet-avatar, list-item"/>
                <ul className="ListMenu">
                    <li className="list-item"><img src={Home} /><span>Home</span></li>
                    <li className="list-item"><img src={Explore} alt="" srcset="" /><span>Explore</span></li>
                    <li className="list-item"><img src={Notifications} alt=""/><span>Notifications</span></li>
                    <li className="list-item"><img src={Messages} alt=""  /><span>Messages</span></li>
                    <li className="list-item"><img src={Bookmarks} alt="" /><span>Bookmarks</span></li>
                    <li className="list-item"><img src={Lists} alt="" /><span>Lists</span></li>
                    <li className="list-item"><img src={Profile} alt="" /><span>Profile</span></li>
                    <li className="list-item"><img src={More} alt="" /><span>More</span></li>
                </ul>
                <button className="button">
                    Tweet
                </button>
        </div>
         
        </>
       
    )  
}
export default SideBar;