import { cardAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys);

const baseStyle = definePartsStyle({
  // define the part you're going to style
  container: {
    backgroundColor: "white",
    color: "black",
    borderRadius: "3xl",
  },
  body: {
    backgroundColor: "gray.500",
  },
});
export const cardTheme = defineMultiStyleConfig({ baseStyle });
