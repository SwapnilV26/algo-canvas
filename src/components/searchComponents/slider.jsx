import React from 'react';
import { Slider, Typography } from '@mui/material';


function valuetext(value) {
    return `${value}`;
}


export default function DiscreteSlider(props) {
    const handleChange = (event) => {
        if (event.target.innerText === "") {
            return;
        }
        const num = parseInt(event.target.innerText, 10);
        props.onCountChange(num);
    }
    return (
        <div className="mx-2 w-[200px]">
            <Slider
                defaultValue={props.default}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="on"
                onChangeCommitted={handleChange}
                step={props.step}
                // marks={props.marks}
                min={props.min}
                max={props.max}
                disabled={props.disable}
            />
            <Typography id="discrete-slider" gutterBottom>
                {props.title}
            </Typography>
        </div>
    );
}
