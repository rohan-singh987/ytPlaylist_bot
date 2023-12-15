"use client"
import { searchVideos } from '@/app/api/searchVideos'
import React, { useState } from 'react'

const InputBox = ({ addQueue }) => {

  const [songInput, setSongInput] = useState("")

  const searchSong = async (query) => {
    const response = await searchVideos(query);
    console.log(response.data.items[0].id.videoId);
    addQueue(response.data.items[0]);
  }
  
  const handleSearch = (e) => {
    if(e.key == 'Enter')
    {
      searchSong(songInput)
      setSongInput("")
    }
  }

  return (
    <div className='mb-5'>
      <input type="text"
        value={songInput}
        className='text-black px-4 py-2 border border-gray-300 block w-full rounded-md placeholder:font-medium placeholder:text-[#C4C4C4] placeholder:text-xl'
        placeholder='Input Song Name'
        onChange={(e) => setSongInput(e.target.value)} 
        onKeyDown={handleSearch}
      />
    </div>
  )
}

export default InputBox