import {FormControl, FormControlLabel, FormLabel, Grid, InputLabel, MenuItem, Radio, RadioGroup, Select, Slider, Stack, TextField, Typography} from "@mui/material";
import {useState} from "react";

export default function GameForm(props) {
    const {game} = props;
    const empty = {
        id: null,
        name: "",
        type: '',
        rating: 1.0,
        playerRange: {
            id: null,
            minPlayers: 1,
            maxPlayers: 1,
            multiplayer: true,
        }
    };
    const [form, setForm] = useState({...empty, ...game});

    function handleChange(e) {
        setForm({...form, [e.target.name]: e.target.value});
    }

    function handleRangeChange(e) {
        setForm({...form, playerRange: {...form.playerRange, [e.target.name]: e.target.value}});
    }

    return (<Grid container spacing={2}>
        <Grid size={{xs: 12, sm: 6, md: 3}}>
            <TextField id="game-name-input" name="name" label="Name" value={form.name} onChange={handleChange} />
        </Grid>
        <Grid size={{xs: 12, sm: 6, md: 3}}>
            <FormControl>
                <FormLabel>Game Is:</FormLabel>
                <RadioGroup value={form.playerRange.multiplayer} name="multiplayer" defaultValue={true} onChange={handleRangeChange}>
                    <FormControlLabel control={<Radio/>} label="Single Player" value={false} />
                    <FormControlLabel control={<Radio/>} label="Multiplayer" value={true} />
                </RadioGroup>
            </FormControl>
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
        <Grid size={{xs: 12, sm: 6, md: 3}}>
            <Stack spacing={2} direction="row" sx={{alignItems: "center", mb: 1}}>
                <Typography>Rating:</Typography>
            </Stack>
            <Slider name="rating" value={form.rating} step={.1} min={1} max={5} valueLabelDisplay="on" track={false} onChange={handleChange} sx={{mt: 4}} />
        </Grid>
        <Grid size={{xs: 12, sm: 6, md: 3}}>
            <TextField type="number" id="game-player-min-input" name="minPlayers" label="Minimum Players" value={form.playerRange.minPlayers} onChange={handleRangeChange} disabled={form.playerRange.multiplayer === "false"} />
        </Grid>
        <Grid size={{xs: 12, sm: 6, md: 3}}>
            <TextField type="number" id="game-player-max-input" name="maxPlayers" label="Maximum Players" value={form.playerRange.maxPlayers} onChange={handleRangeChange} disabled={form.playerRange.multiplayer === "false"} />
        </Grid>
    </Grid>);
}