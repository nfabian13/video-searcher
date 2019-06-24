import React from 'react'
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';

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
    const { open } = props
    console.log('openModal', open)

    const handleClose = () => props.handleClose()

    return(
        <div>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}>
                <div style={divStyle}>
                    <Typography variant="h6" id="modal-title">
                        Text in a modal
                    </Typography>
                    <Typography variant="subtitle1" id="simple-modal-description">
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </div>
            </Modal>
        </div>
    )
}
export default VideoModal