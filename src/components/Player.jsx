import React from 'react'
import ReactPlayer from 'react-player'

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
                            autoPlay: 1,
                            controls:1
                        },
                        onUnstarted: nextSong
                    }
                }}
            />
        </div>
    )
}

export default Player