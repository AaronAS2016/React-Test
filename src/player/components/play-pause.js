import React from 'react'
import Play from '../../icons/components/play'
import Pause from '../../icons/components/pause'
import './play-pause.css'

const PlayPause = props => (
    <div className="PlayPause">


        {
            props.pause ?
                <button 
                    onClick={props.handleClick}
                    className="PlayPausebutton"
                >
                    <Play  size={25} color="white"/>
                </button>
            :
                <button
                    onClick={props.handleClick}
                    className="PlayPausebutton"
                >
                    <Pause size={25} color="white"/>
                </button>
        }



    </div>
)

export default PlayPause;