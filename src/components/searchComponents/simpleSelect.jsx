import React, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { styled } from '@mui/system';

const FormWrapper = styled('div')(({ theme }) => ({
    margin: theme.spacing(1),
}));

const SimpleSelect = ({ pos, onAlgoChanged }) => {
    const [algo, setAlgo] = useState('0');
    // const [state, setState] = useState({
    //   pos: props.pos,
    // });

    const handleChange = (event) => {
        setAlgo(event.target.value);
        onAlgoChanged(pos, event.target.value);
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
                    <MenuItem value={0}>Linear Search</MenuItem>
                    <MenuItem value={1}>Binary Search</MenuItem>
                </Select>
            </FormControl>
        </FormWrapper>
    );
};

export default SimpleSelect;
