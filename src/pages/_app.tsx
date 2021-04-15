import React, { useState } from "react";
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import { Web3ReactProvider } from "@web3-react/core";
import getLibrary from "../utils/getLibrary";

const MyApp = ({ Component, pageProps }:AppProps) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Component {...pageProps} />
      </Web3ReactProvider>
    </ChakraProvider>
  );
};

export default MyApp;
