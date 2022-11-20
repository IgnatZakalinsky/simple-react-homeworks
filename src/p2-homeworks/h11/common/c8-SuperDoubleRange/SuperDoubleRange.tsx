import React, {ChangeEvent} from 'react'
import {Box, Slider} from "@material-ui/core";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: number[]) => void
    value?: number[]
    // min, max, step, disable, ...
}

export const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    console.log("rest", onChangeRange)
    const handleChange = (event: React.ChangeEvent<{}>, value: number | number[]) => {
        // setValue(newValue as number[]);
        Array.isArray(value) && onChangeRange && onChangeRange(value)
    };
    // function valuetext(value: number) {
    //     return `${value}°C`;
    // }

    return (
        <div style={{width:160}}>
            <Slider
                // getAriaLabel={() => 'Temperature range'}
                value={value || [0, 100]}
                onChange={handleChange}
                valueLabelDisplay="auto"
                // getAriaValueText={valuetext}
            />
        </div>
    )
}
