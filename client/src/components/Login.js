import React, { useEffect } from "react";
import { getTokenFromUrl, loginUrl } from "../spotify";
import '../styles/styles.css';

function Login() {

    return (
        <div className="login">
            <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="Spotify Logo" />
            <a href={loginUrl}>Login with Spotify</a>
        </div>
    )
}

export default Login 