import React, { useState } from "react";
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import { Web3ReactProvider } from "@web3-react/core";
import { getLibrary } from "../utils/utils";
import { Container } from "../components/common/container";
import Header from "../components/common/Navbar/header";
import Footer from "../components/common/Footer/footer";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Container minH="100vh" minW="1080px">
          <Header />
          <Component {...pageProps} />
          <Footer />
        </Container>
      </Web3ReactProvider>
    </ChakraProvider>
  );
};

export default MyApp;
