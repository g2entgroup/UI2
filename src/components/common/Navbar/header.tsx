import React, { useEffect } from "react";
import { Flex, Box, Grid, Heading, Spacer } from "@chakra-ui/react";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from '@ethersproject/providers'
import { injectedConnector } from "../../../utils/injectedConnector";
import Image from "next/image";


const Header = () => {
  const { activate,chainId } = useWeb3React<Web3Provider>();

  // click to conncet wallet
  const onClick = () => {
    activate(injectedConnector);
    console.log(chainId)
  };

  return (
    <Flex>
      <Box w="100%">
        <Box textAlign="center" mb="3rem">
          <Image
            src="/g2.png"
            alt="Picture of the author"
            width={80}
            height={80}
          />
          <Heading fontSize="2rem">Creative</Heading>
        </Box>
      </Box>
      <Spacer />
      <Box w="100%"></Box>
      <Spacer />
      <Box w="100%"></Box>
      <Spacer />
      <Box w="100%">
        <Box
          as="button"
          bgColor="#e50168"
          textAlign="center"
          w="9rem"
          p="0.5rem"
          borderRadius="2rem"
          mt="1rem"
          onClick={onClick}
        >
          Wallet Connect
        </Box>
      </Box>
    </Flex>
  );
};

export default Header;
