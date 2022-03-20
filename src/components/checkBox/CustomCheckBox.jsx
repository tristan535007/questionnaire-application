import {
    Checkbox,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material';

export const CustomCheckBox = ({ options, handleCheckBox, checked }) => {
    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value.answerText);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value.answerText);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        handleCheckBox(newChecked);
    };

    return (
        <List sx={{ width: '100%', maxWidth: '100%' }}>
            {options.map((option, i) => {
                const labelId = `checkbox-list-label-${option.answerText}`;
                return (
                    <ListItemButton
                        role={undefined}
                        onClick={handleToggle(option)}
                        dense
                        key={i}
                    >
                        <ListItemIcon>
                            <Checkbox
                                edge="start"
                                checked={
                                    checked.indexOf(option.answerText) !== -1
                                }
                                tabIndex={-1}
                                disableRipple
                                inputProps={{ 'aria-labelledby': labelId }}
                            />
                        </ListItemIcon>
                        <ListItemText
                            id={labelId}
                            primary={option.answerText}
                        />
                    </ListItemButton>
                );
            })}
        </List>
    );
};
