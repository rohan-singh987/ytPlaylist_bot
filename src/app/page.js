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
    if (currVideoId == null) {
      setCurrVideoId(video.id.videoId)
    }
  }

  const nextSong = () => {
    setCurrVideoId(videoList[1].id.videoId)
    setVideoList(videoList.slice(1))
      console.log(currVideoId);
    
  }

  console.log("videoList ------>", videoList);
  console.log("currvideoID ------>", currVideoId);

  return (
    <div className='max-w-screen-2xl mx-auto'>
      <main className='m-10'>
        <InputBox addQueue={addToQueue} />
        <div className='flex md:flex-row flex-col gap-10'>
          {
            videoList.length > 0
            &&
            <Player videoId={currVideoId} nextSong={nextSong} />
          }

          <Queue list={videoList} />
        </div>
      </main>
    </div>
  )
}

export default Page