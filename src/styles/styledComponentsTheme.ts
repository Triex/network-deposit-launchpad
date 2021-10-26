export const colors = {
  transparent: 'transparent',
  white: '#ffffff',
  gray: {
    lightest: '#fdfcfe',
    light: '#F0F4F8',
    medium: '#B6B6B6',
    dark: '#4A4A4A',
    brand: '#f5f0f8',
  },
  black: '#333333',
  blue: {
    lightest: '#D4D7E7',
    light: '#b0e2f5',
    medium: '#007FB0',
    dark: '#0F2A43',
  },
  green: {
    light: '#F8FAF9',
    medium: '#D0E1D5',
    dark: '#26AB83',
  },
  red: {
    lightest: '#fff0f2',
    light: '#FF9B9A',
    medium: '#912d2c',
  },
  orange: '#FFF9F2',
  purple: {
    light: '#F0F2FB',
    medium: '#E3E5F2',
    dark: '#795da3',
    brand: '#956098',
    lavender: '#d7c7dd',
  },
  yellow: {
    light: '#fff0a8',
    dark: '#f0ad4d',
    darkest: '#8a6d3b',
  },
};

export const details = {
  borderRadius: '3px',
};

export const gradientColors = [
  '#fdccd3', // pink
  '#fca09a', // red
  '#ffcc9e', // yellow
  '#98ddad', // green
  '#81d7ec', // blue
  '#91C1ED', // blurple
  '#a0aaed', // purple
];

export const gradientBGColors = [
  '#fdccd3', // pink
  '#FED4D1', // red
  '#fcead9', // yellow-orange
  '#dcf0df', // green
  '#d3edf6', // blue
  '#baccf2', // blurple
  '#a0aaed', // purple
];

export const gradientLightColors = [
  '#fef2f4',
  '#c7abab',
  '#f1dad7',
  '#f6e5e5',
  '#fae9df',
  '#f1dad7',
  '#dabfbf',
];

export const gradientFooterColors = [
  '#fef2f4',
  '#d9c1c1',
  '#f1dad7',
  '#f6e5e5',
  '#fae9df',
  '#f1dad7',
  '#dabfbf',
];

export const gradientBlackColors = ['#000000', '#0a0a0a', '#1f1f1f', '#151515'];
export const gradientNavbarColors = ['#7043b0', '#b47983'];
export const gradientDisclaimerColors = ['#f2dede', '#fff0f0'];
export const brandButtonHoverColours = ['#dcc2c1', '#efd8d5'];

export const gradient = gradientColors.join(', ');
export const gradientLight = gradientLightColors.join(', ');
export const gradientBlack = gradientBlackColors.join(', ');
export const gradientNavbar = gradientNavbarColors.join(', ');
export const gradientDisclaimer = gradientDisclaimerColors.join(', ');
export const gradientFooter = gradientFooterColors.join(', ');
export const gradientButtonHover = brandButtonHoverColours.join(', ');

export const screenSizes = {
  smaller: '420px',
  small: '576px',
  medium: '768px',
  large: '992px',
  larger: '1200px',
  largest: '1440px',
  huge: '1820px',
};

export const styledComponentsTheme = {
  ...colors,
  screenSizes,
  ...details,
  gradient,
  gradientLight,
  gradientBlack,
  gradientNavbar,
  gradientLightColors,
  gradientDisclaimer,
  gradientFooter,
  gradientButtonHover,
};
