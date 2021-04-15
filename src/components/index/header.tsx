import React from "react";
import { Box } from "@chakra-ui/react";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { injectedConnector } from "../../utils/injectedConnector";

const Header = () => {
  const {
    chainId,
    account,
    library,
    activate,
    active,
  } = useWeb3React<Web3Provider>();

  const onClick = () => {
    console.log(123);
    activate(injectedConnector);
  };

  return (
    <Box>
      <Box onClick={onClick}>wallet connect</Box>
    </Box>
  );
};

export default Header;
