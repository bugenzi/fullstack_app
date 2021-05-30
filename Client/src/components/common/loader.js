import React from 'react'
import {CircularProgress} from '@material-ui/core'

export default function Loader(props) {
    const {styling}=props
    return (
        <div className="progress-container">
            <CircularProgress style={{width:"60px",height:"60px"}}/>
        </div>
    )
}

