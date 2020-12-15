import React,{useState} from 'react';
import './style/app.scss';
import Song from './components/Song';
import Player from './components/Player';
import data from './data';


function App() {

  const [songs,setSongs]=useState(data());
  const [currentSong,setCurrentSong]=useState(songs[0]);
  const [isPlayingNow,setIsPlayingNow]=useState(false);

  return (
    <div className="App">
     <Song currentSong={currentSong}/>
     <Player currentSong={currentSong} isPlayingNow={isPlayingNow} setIsPlayingNow={setIsPlayingNow}/>
    </div>
  );
}

export default App;
