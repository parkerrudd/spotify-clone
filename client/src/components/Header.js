import React from "react";
import styles from "../styles/styles.css";
import SearchIcon from '@mui/icons-material/Search'; 
import Avatar from '@mui/material/Avatar';
import { useDataLayerValue } from "../DataLayer";


function Header() {

    const [{ user }] = useDataLayerValue()
    
    return (
        <div className="header">
            <div className="header__left">
                <SearchIcon />
                <input type="text" placeholder="What do you want to listen to?"/>
            </div>

            <div className="header__right">
                <Avatar src={user?.images[0]?.url} alt="PR" />
                <h4> {user?.display_name} </h4>
            </div>
        </div>
    )
}

export default Header; 