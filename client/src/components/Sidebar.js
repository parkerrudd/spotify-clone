import React from "react";
import styles from '../styles/styles.css';
import SidebarOption from "./SidebarOption";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useDataLayerValue } from "../DataLayer";

function Sidebar({ spotify }) {

    const [{ playlists }] = useDataLayerValue()

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img className="sidebar__logo" src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="Spotify Logo" />
                <SidebarOption Icon={HomeIcon} title="Home" />
                <SidebarOption Icon={SearchIcon} title="Search" />
                <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
                <br />
                <strong className="sidebar__title">PLAYLISTS</strong>
                <hr />
            </div>
            
            <div className="sidebar__bottom">  
                { playlists?.items?.map((playlist, i) => <SidebarOption spotify={spotify} playlist_id={playlist.id} key={i} title={playlist.name} />) }
             </div>
      

        </div>
    ); 
}

export default Sidebar; 