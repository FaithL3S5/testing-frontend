import { defineStyle, extendTheme } from "@chakra-ui/react";
import { cardTheme } from "./cardTheme";
import { buttonTheme } from "./buttonTheme";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: props.colorMode === "dark" ? "black" : "white",
        color: props.colorMode === "dark" ? "white" : "black",
      },
    }),
  },
});

export default theme;
