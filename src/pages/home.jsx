import React from 'react';
import Header from '../components/header/header';
import TweetEditor from '../components/tweet-editor/tweet-editor';
import Tweets from '../components/Tweets/tweet';
import SideBar from '../components/sidebar/sidebar';
import Trends from '../components/trends/Trends';
function Home() {
  return (
    <>
    <SideBar />
    <main className="timeline">
      <Header />
      <TweetEditor />
      <Tweets />
      <Trends />
    </main>
    
    <Trends />
    </>
    
  );
}

export default Home;