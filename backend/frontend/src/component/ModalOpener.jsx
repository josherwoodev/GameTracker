import {Box, Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Tooltip} from "@mui/material";
import {useState} from "react";

export default function ModalOpener(props) {
    const {textOptions, openHandler, children} = {textOptions: {}, ...props};
    const [open, setOpen] = useState(false);

    function openModal() {
        setOpen(true);
    }

    function closeModal() {
        setOpen(false);
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
                <Button onClick={closeModal} variant="contained" color="success">Cancel</Button>
                <Button onClick={closeModal} variant="contained" color="error">Cancel</Button>
            </DialogActions>
        </Dialog>
    </div>);
}