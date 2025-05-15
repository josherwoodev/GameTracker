import {FormControl, Grid, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {useState} from "react";

export default function GameForm(props) {
    const {game} = props;
    const empty = {
        id: null,
        name: "",
        type: '',
        rating: 0.0,
        playerRange: {
            id: null,
            minPlayers: 0,
            maxPlayers: 0,
            multiplayer: false,
        }
    };
    const [form, setForm] = useState({...game, ...empty});

    function handleChange(e) {
        setForm({...form, [e.target.name]: e.target.value});
    }

    return (<Grid container spacing={2}>
        <Grid size={{xs: 12, sm: 6, md: 3}}>
        </Grid>
        <Grid size={{xs: 12, sm: 6, md: 3}}>
            <FormControl color="primary" fullWidth>
                <InputLabel id="lbl-game-type" color="primary">Game Type</InputLabel>
                <Select defaultValue="" labelId="lbl-game-type" color="primary" value={form.type} label="Game Type" variant="standard" name="type" onChange={handleChange}>
                    <MenuItem value="BOARD">Board Game</MenuItem>
                    <MenuItem value="CARD">Card Game</MenuItem>
                    <MenuItem value="MOBILE">Mobile Game</MenuItem>
                    <MenuItem value="VIDEO">Video Game</MenuItem>
                </Select>
            </FormControl>
        </Grid>
    </Grid>);
}