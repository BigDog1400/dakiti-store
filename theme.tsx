import { ColorMode, extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
interface ChakraConfig {
  initialColorMode: ColorMode;
  useSystemColorMode: boolean;
}

const fonts = { mono: `'Menlo', monospace` };

const config: ChakraConfig = {
  initialColorMode: "light",
  useSystemColorMode: false
};

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em"
});

const theme = extendTheme({
  config,
  colors: {
    black: "#16161D"
  },
  fonts,
  breakpoints
});

export default theme;
