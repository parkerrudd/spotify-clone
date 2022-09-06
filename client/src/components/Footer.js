import React, {useState} from "react";
import styles from '../styles/styles.css';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import { useDataLayerValue } from "../DataLayer";


function Footer() {

    const [{ track } ] = useDataLayerValue()
    const [playing, setPlaying] = useState(false)

    return (
        <div className="footer">
            <div className="footer__left">
                <img className="footer__albumLogo" src={track?.album?.images[0]?.url} alt="Album art" />
                <div className="footer__songInfo">
                    <h4>{track?.name}</h4>
                    <p>{track?.artists[0]?.name}</p>
                </div>
            </div>

            <div className="footer__center">
                <ShuffleIcon className="footer__green" />
                <SkipPreviousIcon className="footer__icon" />
                
                <div class="play__track" onClick={() => setPlaying(!playing)}>
                    { playing ? <PauseCircleOutlineIcon fontSize="large" className="footer__icon" /> : 
                     <PlayCircleOutlineIcon fontSize="large" className="footer__icon" /> 
                    }
                </div>

                <SkipNextIcon className="footer__icon" />
                <RepeatIcon className="footer__green" />
            </div>

            <div className="footer__right">
                <Grid container spacing={2}> 
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>

            </div>
        </div> 
    )
}

export default Footer; 