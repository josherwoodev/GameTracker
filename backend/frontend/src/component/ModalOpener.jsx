import {Box, Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Tooltip} from "@mui/material";
import {useState} from "react";

export default function ModalOpener(props) {
    const {textOptions, openHandler, submitHandler, children, color} = {textOptions: {}, ...props};
    const [open, setOpen] = useState(false);

    function openModal() {
        if (openHandler) openHandler();
        setOpen(true);
    }

    function closeModal() {
        setOpen(false);
    }

    function callSubmit(input) {
        submitHandler(input);
        setOpen(false);
    }

    return (<div>
        {textOptions.tooltip ? <Tooltip title={textOptions.tooltip} arrow placement="bottom"><Button color={color || "modalOpenerBtn"} variant="outlined" onClick={openModal}>{textOptions.rootBtn}</Button></Tooltip>
            : <Button color={color || "modalOpenerBtn"} variant="outlined" onClick={openModal}>{textOptions.rootBtn}</Button>}

        <Dialog open={open} onClose={closeModal} maxWidth="md" fullWidth closeAfterTransition={false}>
            <DialogTitle>{textOptions.title}</DialogTitle>
            <DialogContent>
                {textOptions.desc ? <DialogContentText>{textOptions.desc}</DialogContentText> : null}
                {children}
            </DialogContent>
            <DialogActions>
                {submitHandler ? <Button variant="contained" color="success" onClick={callSubmit}>Submit</Button> : null}
                <Button variant="contained" color="error" onClick={closeModal}>Cancel</Button>
            </DialogActions>
        </Dialog>
    </div>);
}