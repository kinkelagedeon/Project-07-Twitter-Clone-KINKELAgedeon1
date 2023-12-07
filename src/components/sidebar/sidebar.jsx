import React, { createFactory } from "react";
import Twitter from "./../../images/Twitter.svg"
import Home from "./../../images/Home-Fill.svg"
import Explore from "./../../images/Explore.svg"
import Notifications from "./../../images/Notifications.svg"
import Messages from "./../../images/Messages.svg"
import Bookmarks from "./../../images/Bookmarks.svg"
import Lists from "./../../images/Lists.svg"
import Profile from "./../../images/Profile.svg"
import Private from "./../../images/Private.svg"
import More from "./../../images/More.svg"
import More_2 from "./../../images/More-2.svg"
import tweetprofilephoto from "./../../images/profile-photo.png"


function SideBar() {
    return(
        <>
        <div className="SideBar">
                <ul className="ListMenu">
                    <li className="list-item"><img src={Twitter} alt="" /></li>
                    <li className="list-item"><img src={Home} /><span> Home</span></li>
                    <li className="list-item"><img src={Explore} alt="" srcset="" /><span> Explore</span></li>
                    <li className="list-item"><img src={Notifications} alt=""/><span> Notifications</span></li>
                    <li className="list-item"><img src={Messages} alt=""  /><span> Messages</span></li>
                    <li className="list-item"><img src={Bookmarks} alt="" /><span> Bookmarks</span></li>
                    <li className="list-item"><img src={Lists} alt="" /><span> Lists</span></li>
                    <li className="list-item"><img src={Profile} alt="" /><span> Profile</span></li>
                    <li className="list-item"><img src={More} alt="" /><span> More</span></li>
                </ul>
                <button className="button_sideba">
                    Tweet
                </button>
                    <div className="Proflile_avatar">
                        <div>
                             <img width={50}  src={tweetprofilephoto} alt="tweet-avatar" />
                        </div>
                            <div>
                                <p>KINKELA gedeon <img src={Private} alt="" /></p>
                                <span>@KINKELAgedeon </span>
                            </div>
                    </div>
                    <div className="more">
                               <img src={More_2} alt="" /> 
                    </div>
        </div>
         
        </>
       
    )  
}
export default SideBar;