import React, { useState } from "react";
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import { Web3ReactProvider } from "@web3-react/core";
import getLibrary from "../utils/getLibrary";
import { Container } from "../components/common/Container";
import Header from '../components/index/header'
import Footer from '../components/index/footer'

const MyApp = ({ Component, pageProps }:AppProps) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Container minH="100vh">
        <Header/>
        <Component {...pageProps} />
        <Footer/>
        </Container>
      </Web3ReactProvider>
    </ChakraProvider>
  );
};

export default MyApp;
