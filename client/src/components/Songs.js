import React from "react";

function Songs({ Artwork, Title, Artist, Album, Duration, Number }) {

    function millisToMinutesAndSeconds(Duration) {
        var minutes = Math.floor(Duration / 60000);
        var seconds = ((Duration % 60000) / 1000).toFixed(0);
        return minutes.toString() + ":" + (seconds < 10 ? '0' : '') + seconds.toString();
    }

    return (
        <div className="songs">
            <p className="songs__number">{Number}</p>
            <img src={Artwork} alt="Song Artwork" />
            <div className="song__info">
                <h4>{Title}</h4> 
                <p>{Artist}</p> 
            </div>

            <p>{Album}</p> 
            <p>{millisToMinutesAndSeconds()}</p>
        </div>
    )
}

export default Songs;