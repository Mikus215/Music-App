import React from 'react';

const LibrarySong = ({song,setCurrentSong,songs}) => {

    // set current music to state
    const setCurrentSongHandle = () =>{
        const selectedSong=songs.filter(item => item.id === song.id)
        setCurrentSong(selectedSong[0])
    }

    return ( 
        <div onClick={setCurrentSongHandle} className="library-song">
            <img src={song.cover} alt={song.name}/>
            <div className="library-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
     );
}
 
export default LibrarySong;

