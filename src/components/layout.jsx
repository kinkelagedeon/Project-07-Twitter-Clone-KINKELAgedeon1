import React from 'react';
import SideBar from './sidebar/sidebar';
import Trends from './trends/Trends';

function Layout({children}) {
    return (
        <>
            <div className="left-sidebar">
            <SideBar/>
            </div>
            {children}
            <div className="right-sidebar" >
            <Trends />
            </div>
        </>
    );
}

export default Layout;