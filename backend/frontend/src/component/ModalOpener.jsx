import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Tooltip} from "@mui/material";
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

    function callSubmit(e) {
        e.preventDefault();
        submitHandler(new FormData(e.target));
        setOpen(false);
    }

    return (<div>
        {textOptions.tooltip ? <Tooltip title={textOptions.tooltip} arrow placement="bottom"><Button color={color || "modalOpenerBtn"} variant="outlined" onClick={openModal}>{textOptions.rootBtn}</Button></Tooltip>
            : <Button color={color || "modalOpenerBtn"} variant="outlined" onClick={openModal}>{textOptions.rootBtn}</Button>}

        <Dialog open={open} onClose={closeModal} maxWidth="md" slotProps={{paper:{component: 'form'}}} fullWidth closeAfterTransition={false}>
            <DialogTitle>{textOptions.title}</DialogTitle>
            <DialogContent>
                {textOptions.desc ? <DialogContentText sx={{my: 2}}>{textOptions.desc}</DialogContentText> : null}
                {children ? <div style={{marginTop: 5}}>{children}</div> : null}
            </DialogContent>
            <DialogActions>
                {submitHandler ? <Button variant="contained" color="success" onClick={callSubmit} type="submit">Submit</Button> : null}
                <Button variant="contained" color="error" onClick={closeModal}>Cancel</Button>
            </DialogActions>
        </Dialog>
    </div>);
}