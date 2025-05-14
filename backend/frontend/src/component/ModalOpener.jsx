import {Box, Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid} from "@mui/material";
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
        <Button color="modalOpenerBtn" variant="outlined" onClick={openHandler || openModal}>{textOptions.rootBtn}</Button>
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
            {/*<Box>*/}
            {/*    <Container>*/}
            {/*        {children}*/}
            {/*    </Container>*/}
            {/*    <Grid container>*/}
            {/*        <Grid size="grow"></Grid>*/}
            {/*        {<Grid size={2}>*/}
            {/*        </Grid>}*/}
            {/*        <Grid size={2}>*/}
            {/*        </Grid>*/}
            {/*    </Grid>*/}
            {/*</Box>*/}
        </Dialog>
    </div>);
}