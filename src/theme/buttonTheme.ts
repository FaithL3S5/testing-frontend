import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const buttonBrandPrimary = defineStyle({
  background: "orange.500",
  color: "white",

  // let's also provide dark mode alternatives
  // _dark: {
  //   background: 'orange.300',
  //   color: 'orange.800',
  // }
});

export const buttonTheme = defineStyleConfig({
  variants: { buttonBrandPrimary },
});
