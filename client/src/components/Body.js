import React from "react";
import { useDataLayerValue } from "../DataLayer";
import styles from '../styles/styles.css'; 
import Header from "./Header";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Songs from "./Songs";

function Body({ spotify }) {

    const [{ discover_weekly }] = useDataLayerValue(); 

    console.log(discover_weekly?.tracks)

    return (
        <div className="body"> 
            <Header spotify={spotify} />

            <div className="body__info">
                <img src={discover_weekly?.images[0]?.url} alt="" />
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>{discover_weekly?.name}</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>

            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleIcon className="body__shuffle" />
                    <FavoriteIcon className="body__heart" fontSize="large" />
                    <MoreHorizIcon className="body__moreInfo" />
                </div>    

                {discover_weekly?.tracks?.items.map((song, i) => <Songs key={i} Artwork={song.track.album.images[0].url} Title={song.track.name} Artist={song.track.artists[0].name} Album={song.track.album.name} Duration={song.track.duration_ms} Number={i + 1}/>) }
                
            </div>

        </div>
    )
}

export default Body; 