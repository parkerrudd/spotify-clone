import React from "react";
import styles from '../styles/styles.css'; 

function SidebarOption({ title, Icon }) {

    return (
        <div className="sidebarOption">
            <p>{title}</p>
        </div> 
    )
}

export default SidebarOption;