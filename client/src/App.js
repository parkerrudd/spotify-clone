import React, { useEffect, useMemo} from "react";
import './App.css';
import Login from "./components/Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./components/Player";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi()

function App() {
  const [{ playlists, token }, dispatch] = useDataLayerValue()

  useEffect(() => {
    const hash = getTokenFromUrl()
    window.location.hash = ""
    const _token = hash.access_token

    if (_token) {
      dispatch({
        type: 'SET_TOKEN', 
        token: _token
      })

      spotify.setAccessToken(_token)

      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER', 
          user: user
        })
      })

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS', 
          playlists,
        })
      })

      spotify.getTrack("7a8puGVFg3URxm0tsXUs6d").then((track) => {
            dispatch({
                type: 'SET_TRACK', 
                track
            })
      })

      spotify.getMySavedTracks().then(liked => {
        dispatch({
          type: 'SET_LIKED', 
          liked
        })
      })
    

    }
  }, [])

  useMemo(() => {
    setTimeout(() => {
      spotify.getPlaylist(playlists?.items[0]?.id).then(response => {
        dispatch({
          type: 'SET_DISCOVER_WEEKLY', 
          discover_weekly: response
        })
      })
     
    }, 10)
  }, [playlists])


  return (
    <div className="App">
      {
        token ? <Player spotify={spotify} /> : <Login />
      }
    </div>
  );
}

export default App;
