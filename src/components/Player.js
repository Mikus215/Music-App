import React from 'react';
// import font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import icons from font awesome
import {faPlay, faAngleLeft,faAngleRight,faPause} from '@fortawesome/free-solid-svg-icons';

    // change status playing && play && pause music

const Player = ({isPlayingNow,setIsPlayingNow,audioRef,songInfo,setSongInfo}) => {

    //Event handler
    const playSongHandle=()=>{
            {isPlayingNow ? audioRef.current.pause() : audioRef.current.play()};
            setIsPlayingNow(!isPlayingNow);        
    }
    // compile time to only seconds

    const getTimeInSeconds=time=>{
        return(
            Math.floor(time/60) + ":" + ("0" + Math.floor(time%60)).slice(-2)
        )
    }

    // drag,move song forward and back using mouse

    const dragInputValue = e =>{
        setSongInfo({...songInfo,currentTime: e.target.value})
        audioRef.current.currentTime=e.target.value;
    }

    return ( 
        <div className="player-container">
            <div className="time-control">
                <p>{getTimeInSeconds(songInfo.currentTime)}</p>
                <input type="range" min={0} max={songInfo.duration || 0} value={songInfo.currentTime} onChange={dragInputValue}/>
                <p>{getTimeInSeconds(songInfo.duration)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className="skip-back" icon={faAngleLeft} size="2x"/>
                <FontAwesomeIcon onClick={playSongHandle} className="play" icon={isPlayingNow?faPause:faPlay} size="2x"/>
                <FontAwesomeIcon className="skip-forward" icon={faAngleRight} size="2x"/>
            </div>
        </div>
     );
}
 
export default Player;