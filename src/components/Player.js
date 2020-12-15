import React,{useRef,useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlay, faAngleLeft,faAngleRight,faPause} from '@fortawesome/free-solid-svg-icons';
const Player = ({currentSong,isPlayingNow,setIsPlayingNow}) => {
    //ref
    const audioRef= useRef(null);
    //Event handler
    const playSongHandle=()=>{
            {isPlayingNow ? audioRef.current.pause() : audioRef.current.play()};
            setIsPlayingNow(!isPlayingNow);        
    }
    //State
    const [songInfo,setSongInfo]=useState({
        currentTime: null,
        duration: null,
    })

    // Update time every call from audio

    const updateTimeHandle=e=>{
        const currentTime=e.target.currentTime
        const duration=e.target.duration
        setSongInfo({
            ...songInfo,
            currentTime,
            duration,
        })
    }

    // compile time to only seconds

    const getTimeInSeconds=time=>{
        return(
            Math.floor(time/60) + ":" + ("0" + Math.floor(time%60)).slice(-2)
        )
    }

    return ( 
        <div className="player-container">
            <div className="time-control">
                <p>{getTimeInSeconds(songInfo.currentTime)}</p>
                <input type="range"/>
                <p>{getTimeInSeconds(songInfo.duration)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className="skip-back" icon={faAngleLeft} size="2x"/>
                <FontAwesomeIcon onClick={playSongHandle} className="play" icon={isPlayingNow?faPause:faPlay} size="2x"/>
                <FontAwesomeIcon className="skip-forward" icon={faAngleRight} size="2x"/>
            </div>
            <audio onTimeUpdate={updateTimeHandle} ref={audioRef} src={currentSong.audio}></audio>
        </div>
     );
}
 
export default Player;