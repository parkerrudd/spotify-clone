import React, { useEffect, useState } from "react";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

function Songs({ Artwork, Title, Artist, Album, Duration, Number }) {

    const [time, setTime] = useState('')
    const [playButton, setPlayButton] = useState(false)

    useEffect(() => {
        var minutes = Math.floor(Duration / 60000);
        var seconds = ((Duration % 60000) / 1000).toFixed(0);
        setTime(minutes.toString() + ":" + (seconds < 10 ? '0' : '') + seconds.toString());
        
    }, [])

    const playSong = () => {

    }

    return (
        <div className="songs" onClick={playSong} 
        onMouseEnter={() => setPlayButton(true)} 
        onMouseLeave={() => setPlayButton(false)}>
           {playButton ? <p className="songs__number"> <PlayArrowIcon /> </p> : <p className="songs__number">{Number}</p>}
            <img src={Artwork} alt="Song Artwork" />
            <div className="song__info">
                <h4 className="song__title">{Title}</h4> 
                <p className="song__artist">{Artist}</p> 
            </div>

            <p className="song__album">{Album}</p> 
            <p>{time}</p>
        </div>
    )
}

export default Songs;