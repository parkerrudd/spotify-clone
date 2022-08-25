import React from "react";
import styles from '../styles/styles.css'; 

function SidebarOption({ title, Icon }) {

    return (
        <div className="sidebarOption">
            {Icon ? <Icon className="sidebarOption__icon" /> : null}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </div> 
    )
}

export default SidebarOption;