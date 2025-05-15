import {Box, Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Tooltip} from "@mui/material";
import {useState} from "react";

export default function ModalOpener(props) {
    const {textOptions, openHandler, submitHandler, children} = {textOptions: {}, ...props};
    const [open, setOpen] = useState(false);

    function openModal() {
        setOpen(true);
    }

    function closeModal() {
        setOpen(false);
    }

    function callSubmit(game) {
        submitHandler(game);
    }

    return (<div>
        {textOptions.tooltip ? <Tooltip title={textOptions.tooltip} arrow placement="bottom"><Button color="modalOpenerBtn" variant="outlined" onClick={openHandler || openModal}>{textOptions.rootBtn}</Button></Tooltip>
            : <Button color="modalOpenerBtn" variant="outlined" onClick={openHandler || openModal}>{textOptions.rootBtn}</Button>}

        <Dialog open={open} onClose={closeModal} maxWidth="md" fullWidth closeAfterTransition={false}>
            <DialogTitle>{textOptions.title}</DialogTitle>
            <DialogContent>
                <DialogContentText>{textOptions.desc}</DialogContentText>
                {children}
            </DialogContent>
            <DialogActions>
                {submitHandler ? <Button variant="contained" color="success" onClick={callSubmit}>Submit</Button> : null}
                <Button variant="contained" color="error" onClick={closeModal}>Cancel</Button>
            </DialogActions>
        </Dialog>
    </div>);
}