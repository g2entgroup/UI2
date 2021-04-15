import Head from "next/head";
import { Box, Text, Flex, Heading } from "@chakra-ui/react";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { injectedConnector } from "../utils/injectedConnector";

export default function Home() {
  const {
    chainId,
    account,
    library,
    activate,
    active,
  } = useWeb3React<Web3Provider>();

  const onClick = () => {
    console.log(123)
    activate(injectedConnector);
  };

  return (
    <Box>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      index
      <Box onClick={onClick}>123</Box>
    </Box>
  );
}
