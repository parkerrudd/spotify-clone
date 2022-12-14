import React from "react";
import styles from '../styles/styles.css';
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";


function Player({ spotify }) {

    return (
        <div className="player">
            <div className="player-body">
                <Sidebar spotify={spotify} />
                <Body spotify={spotify} />
            </div>
            <Footer />
        </div>
    )
}

export default Player