"use client";
import Player from '@/components/Player';
import Queue from '@/components/Queue';
import React, { useState } from 'react'
import InputBox from '@/components/InputBox';

const Page = () => {

  const [videoList, setVideoList] = useState([]);
  const [currVideoId, setCurrVideoId] = useState(null);

  const addToQueue = (video) => {
    console.log(video);
    setVideoList([...videoList, video])
    if(currVideoId == null)
    {
      setCurrVideoId(video.id.videoId)
    }
  }

  const nextSong = () => {
    setVideoList(videoList.slice(1))    
    if (videoList.length > 0) {
      setCurrVideoId(videoList[0].id.videoId)
    }
  }

  return (
    <div className='max-w-screen-2xl mx-auto'>
      <main className='m-10'>
      <InputBox addQueue={addToQueue} />
      {
        videoList.length > 0 
        &&
        <Player videoId={currVideoId} nextSong={nextSong} />
      }

      <Queue list={videoList} />
      </main>
    </div>
  )
}

export default Page