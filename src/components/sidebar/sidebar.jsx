import React, { createFactory } from "react";
import SidebarOption from "./SidebarOption";
import Twitter from "./../../images/Twitter.svg"
import Home from "./../../images/Home-Fill.svg"
import Explore from "./../../images/Explore.svg"
import Notifications from "./../../images/Notifications.svg"
import Messages from "./../../images/Messages.svg"
import Bookmarks from "./../../images/Bookmarks.svg"
import Lists from "./../../images/Lists.svg"
import Profile from "./../../images/Profile.svg"
import Privates from "./../../images/Private.svg"
import More from "./../../images/More.svg"
import More_2 from "./../../images/More-2.svg"
import tweetprofilephoto from "./../../images/profile-photo.png"


function SideBar() {
    return(
        <>
        <div className="SideBar">
                    <SidebarOption active img src={Twitter} /> 

                    <SidebarOption active src={Home} text="Home" /> 
                    <SidebarOption active src={Explore} text="Explore" /> 
                    <SidebarOption active src={Notifications} text="Notifications" /> 
                    <SidebarOption active src={Messages} text="Messages" /> 
                    <SidebarOption active src={Bookmarks} text="Bookmarks" /> 
                    <SidebarOption active src={Lists} text="Lists" /> 
                    <SidebarOption active src={Profile} text="Profile" /> 
                    <SidebarOption active src={More} text="More" /> 
                
                <button className="button_sideba">
                    Tweet
                </button>
                
            <div className="Proflile_avatars">
                <div className="Proflile_avatar">
                        <div>
                             <img width={50}  src={tweetprofilephoto} alt="tweet-avatar" />
                        </div>
                            <div>
                                <p>KINKELA gedeon <img src={Privates} alt="" /></p>
                                <span>@KINKELAgedeon </span>
                            </div>
                    </div>
                    <div className="more">
                               <img src={More_2} alt="" /> 
                    </div>

            </div>
                    
        </div>
         
        </>
       
    )  
}
export default SideBar;