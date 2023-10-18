import React, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { styled } from '@mui/system';

const FormWrapper = styled('div')(({ theme }) => ({
    margin: theme.spacing(1),
}));

const SimpleSelect = ({ onAlgoChanged }) => {
    const [algo, setAlgo] = useState('0');

    const handleChange = (event) => {
        setAlgo(event.target.value);
        onAlgoChanged(event.target.value);
    };

    return (
        <FormWrapper className="ml-2 mr-2">
            <FormControl variant="standard">
                <InputLabel id="demo-simple-select-autowidth-label">Algorithm</InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={algo}
                    onChange={handleChange}
                    autoWidth
                    label="algo"
                >
                    <MenuItem value={0}>Dijkstra</MenuItem>
                    <MenuItem value={1}>A star</MenuItem>
                    <MenuItem value={2}>BFS</MenuItem>
                    <MenuItem value={3}>DFS</MenuItem>
                </Select>
            </FormControl>
        </FormWrapper>
    );
};

export default SimpleSelect;
