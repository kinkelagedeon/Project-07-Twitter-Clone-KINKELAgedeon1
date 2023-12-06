import React from 'react';
import Header from '../components/header/header';
import TweetEditor from '../components/tweet-editor/tweet-editor';
import Tweets from '../components/Tweets/tweet';
import SideBar from '../components/sidebar/sidebar';
function Home() {
  return (
    <>
    <SideBar />
    <main className="timeline">
      <Header />
      <TweetEditor />
      <Tweets />


    </main>
    </>
    
  );
}

export default Home;