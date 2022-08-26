import React from "react";

function Songs({ Artwork, Title, Artist, Album }) {

    return (
        <div className="songs">
            <img src={Artwork} alt="Song Artwork" />
            <div className="song__info">
                <h4>{Title}</h4> 
                <p>{Artist}</p> 
            </div>

            <p>{Album}</p> 
        </div>
    )
}

export default Songs;