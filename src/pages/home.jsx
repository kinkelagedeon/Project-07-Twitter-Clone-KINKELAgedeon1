import React from 'react';
import Header from '../components/header/header';
import Tweeteditor from '../components/tweet-editor/tweet-editor';
import Tweet from '../components/Tweets/tweet';
function Home() {
  return (
    <main className="timeline">
      <Header />
      <Tweeteditor />
      <Tweet />


    </main>
  );
}

export default Home;