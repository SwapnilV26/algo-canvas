import React from 'react';
import { Slider } from '@mui/material';

function valuetext(value) {
    return `${value}`;
}

export default function DiscreteSlider(props) {
    const handleChange = (event) =>{
        if( event.target.innerText === "" ){
            return;
        }
        const num = parseInt(event.target.innerText,10);
        props.onCountChange(num);
    }
    return (
        <div className="mx-2 w-[200px] flex flex-col">
            <Slider
                defaultValue={props.default}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider"
                onChangeCommitted={handleChange}
                step={props.step}
               // marks={props.marks}
                min={props.min}
                max={props.max}
                valueLabelDisplay="on"
                disabled={props.disable}
            />
            <h3 className='font-medium pb-1'>
                {props.title}
            </h3>
        </div>
    );
}
