export const PRIMARY_COLOR = '#b87700';
export const SECONDARY_COLOR = '#5bde00';
export const TERNARY_COLOR = '#fafafa';
export const LIGHT_BG = '#fff';
export const DARK_BG = '#333';
export const LIGHT_TEXT = '#fff';
export const DARK_TEXT = '#333';

export const COLOR_CATEGORIES = {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
    TERNARY: 'ternary',
};
export const getColorByCategory = (category) => {
    switch (category) {
        case COLOR_CATEGORIES.PRIMARY:
            return PRIMARY_COLOR;
            break;
        case COLOR_CATEGORIES.SECONDARY:
            return SECONDARY_COLOR;
            break;
        case COLOR_CATEGORIES.TERNARY:
            return TERNARY_COLOR;
            break;
    }
    return TERNARY_COLOR;
};
