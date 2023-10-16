import React, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


const SimpleSelect = (props) => {
    const [algo, setAlgo] = useState('0');
    // const [state, setState] = React.useState({
    //     pos: props.pos,
    // });
    const handleChange = (event) => {
        setAlgo(event.target.value);
        props.onAlgoChanged(props.pos, event.target.value);
        // props.onRandomize();
    };

    return (
        <div className="ml-2 mr-2">
            <FormControl variant="standard" disabled={props.disable}>
                <InputLabel id="demo-simple-select-label">Algorithm</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={algo}
                    onChange={handleChange}
                >
                    <MenuItem value={0} style={{selected:true}} >Bubble Sort</MenuItem>
                    <MenuItem value={1}>Selection Sort</MenuItem>
                    <MenuItem value={2}>Insertion Sort</MenuItem>
                    <MenuItem value={3}>Quick Sort</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}

export default SimpleSelect;