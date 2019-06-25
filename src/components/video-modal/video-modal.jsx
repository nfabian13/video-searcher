import React from 'react'
import Modal from '@material-ui/core/Modal';
import VideoIframe from '../video-iframe/video-iframe'

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

const top = 50 + rand();
const left = 50 + rand();

const divStyle = {
    position: 'absolute',
    width: 700,
    backgroundColor: 'white',
    boxShadow: 5,
    padding: 5,
    outline: 'none',
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
}

const VideoModal = (props) => {
    const { open, videoId } = props
    const handleClose = () => props.handleClose()
    return(
        <div>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}>
                <div style={divStyle}>
                   <VideoIframe youtubeVideoId={videoId}/>
                </div>
            </Modal>
        </div>
    )
}
export default VideoModal