import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from '@ethersproject/providers'
import { injectedConnector } from "../../../utils/injectedConnector";


const Header = () => {
  const { activate,chainId } = useWeb3React<Web3Provider>();

  // click to conncet wallet
  const onClick = () => {
    activate(injectedConnector);
    console.log(chainId)
  };

  return (
    <Box>
      <Box onClick={onClick}>wallet connect</Box>
    </Box>
  );
};

export default Header;
