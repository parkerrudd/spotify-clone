import React from "react";
import { useDataLayerValue } from "../DataLayer";
import styles from '../styles/styles.css'; 
import Header from "./Header";

function Body({ spotify }) {

    const [{ discover_weekly }] = useDataLayerValue(); 

    console.log(discover_weekly)

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
        </div>
    )
}

export default Body; 