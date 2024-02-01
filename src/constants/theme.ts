const COLORS = {
  primary: '#FAFAFC',
  secondary: '#FFECEC',
  tertiary: '#F65156',
  accent: '#FFD9DA',

  gray: '#6C7072',
  gray2: '#C1C0C8',

  white: '#F3F4F8',
  lightWhite: '#FAFAFC',
  darkWhite: '#E6E6E6'
};

const FONT = {
  regular: 'Poppins',
  medium: 'Poppins-SemiBold',
  bold: 'Poppins-Bold'
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
  mTOP: 70
};

const SHADOWS = {
  small: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5
  }
};

export { COLORS, FONT, SIZES, SHADOWS };
