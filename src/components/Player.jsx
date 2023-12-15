import React from 'react'
import ReactPlayer from 'react-player/youtube'

const Player = ({ videoId, nextSong }) => {

    const videoURL = "https://www.youtube.com/watch?v=" + videoId

  return (
    <div className="">
            <ReactPlayer
                url={videoURL}
                playing={true}
                onEnded={nextSong}
                config={{
                    youtube: {
                        playerVars: {
                            autoplay: 1,
                            controls: 1
                        }
                    }
                }}
            />
        </div>
    )
}

export default Player