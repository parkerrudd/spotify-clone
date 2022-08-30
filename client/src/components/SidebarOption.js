import React from "react";
import { useDataLayerValue } from "../DataLayer";
import styles from '../styles/styles.css'; 

function SidebarOption({ title, Icon, playlist_id, spotify }) {

    const [{ token }, dispatch] = useDataLayerValue()

    const changePlaylist = () => {
        spotify.getPlaylist(playlist_id).then(response => {
        dispatch({
          type: 'SET_DISCOVER_WEEKLY', 
          discover_weekly: response
        })
      })
    }

    return (
        <div className="sidebarOption">
            {Icon ? <Icon className="sidebarOption__icon" /> : null}
            {Icon ? <h4>{title}</h4> : <p onClick={changePlaylist}>{title}</p>}
        </div> 
    )
}

export default SidebarOption;