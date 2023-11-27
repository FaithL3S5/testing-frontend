import "material-icons/iconfont/material-icons.css";
import theme from "@/theme/theme";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme} cssVarsRoot="body">
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
