import React from 'react';
import Header from '../components/header/header';
import TweetEditor from '../components/tweet-editor/tweet-editor';
import Tweets from '../components/Tweets/tweet'; 

function Home() {
  return (
    <>
    <main className="timeline">
      <Header />
      <TweetEditor />
      <Tweets />
      <Tweets />
    </main>
    </>
    
  );
}

export default Home;