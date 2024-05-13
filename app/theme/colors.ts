// TODO: write documentation for colors and palette in own markdown file and add links from here

const palette = {
  neutral100: "#FFFFFF",
  neutral200: "#F4F2F1",
  neutral300: "#D7CEC9",
  neutral400: "#B6ACA6",
  neutral500: "#978F8A",
  neutral600: "#564E4A",
  neutral700: "#3C3836",
  neutral800: "#191015",
  neutral900: "#000000",

  primary100: "#F4E0D9",
  primary200: "#E8C1B4",
  primary300: "#DDA28E",
  primary400: "#D28468",
  primary500: "#C76542",
  primary600: "#A54F31",

  secondary100: "#DCDDE9",
  secondary200: "#BCC0D6",
  secondary300: "#9196B9",
  secondary400: "#626894",
  secondary500: "#41476E",

  accent100: "#FFEED4",
  accent200: "#FFE1B2",
  accent300: "#FDD495",
  accent400: "#FBC878",
  accent500: "#FFBB50",

  angry100: "#F2D6CD",
  angry500: "#C03403",

  overlay20: "rgba(25, 16, 21, 0.2)",
  overlay50: "rgba(25, 16, 21, 0.5)",
} as const

export const colors = {
  /**
   * The palette is available to use, but prefer using the name.
   * This is only included for rare, one-off cases. Try to use
   * semantic names as much as possible.
   */
  palette,
  primary: "#008505",
  secondary: "#58A95B",
  third: "#F1FFF2",
  dangerColor: "#F0463B",
  dangerColor2: "#FEDDDD",

  warningColor: "#FDEC53",
  warningColor2: "#FFFFCF",

  successColor: "#52AF57",
  successColor2: "#DEFFDF",

  activeColor: "#3394EF",
  activeColor2: "#DFFFFF",
  disable: "#AEAEB2",
  bgComponent: "#F8F8F8",
  bgButton: "#008505",

  /**
   * A helper for making something see-thru.
   */
  transparent: "rgba(0, 0, 0, 0)",
  /**
   * The default text color in many components.
   */
  text: palette.neutral800,
  /**
   * Secondary text information.
   */
  textDim: palette.neutral600,
  /**
   * The default color of the screen background.
   */
  background: palette.neutral200,
  /**
   * The default border color.
   */
  border: palette.neutral400,
  /**
   * The main tinting color.
   */
  tint: palette.primary500,
  /**
   * A subtle color used for lines.
   */
  separator: palette.neutral300,
  /**
   * Error messages.
   */
  error: palette.angry500,
  /**
   * Error Background.
   *
   */
  errorBackground: palette.angry100,
  black: "#000000",
  gray: "#808080",
  gray3: "#AEAEB2",
  white: "#FFFFFF",
  aqua: "#00FFFF",
  lightGray: "#FAFAFA",

  greenLight: "#00FF00",
  green: "#4CAF50",
  lime: "#a4c403",
  greenLeaves: "#60a916",
  emerald: "#1d8a02",
  teal: "#2daba8",
  ligthGreen: "#E0FFF4",

  cyan: "#30a1e1",
  blue: "#3e65ff",
  blue2: "#2550ef",
  indigo: "#6a00ff",
  violet: "#6a00ff",
  pink: "#f472d0",

  magenta: "#d82372",
  crimson: "#a21a25",
  red: "#F0463B",
  red2: "#cc0000",
  red3: "#e52a00",

  orange: "#f86802",
  lightOrange: "#E07900",
  amber: "#f0a309",

  yellow: "#e3c800",
  brown: "#825a2b",
  olive: "#6c8764",
}
