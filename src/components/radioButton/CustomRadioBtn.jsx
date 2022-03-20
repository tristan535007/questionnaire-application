import React from 'react';
import {
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
} from '@mui/material';

export const CustomRadioBtn = ({
    variants,
    chosenValue,
    handleRadioChange,
}) => {
    return (
        <FormControl>
            <FormLabel id="row-radio-buttons-group-label">Variants:</FormLabel>
            <RadioGroup
                aria-labelledby="row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={chosenValue}
                onChange={handleRadioChange}
            >
                {variants.map((variant, index) => (
                    <FormControlLabel
                        key={index}
                        value={variant.answerText}
                        control={<Radio />}
                        label={variant.answerText}
                    />
                ))}
            </RadioGroup>
        </FormControl>
    );
};
