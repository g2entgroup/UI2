import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { injectedConnector } from "../../utils/injectedConnector";
import { formatEther, formatUnits } from "@ethersproject/units";
import useEtherSWR, { EtherSWRConfig } from "ether-swr";

export const EthBalance = () => {
  const { account, chainId, library } = useWeb3React<Web3Provider>();

  console.log(library);

  const { data: balance, mutate } = useEtherSWR(
    ["getBalance", account, "latest"],
    {
      subscribe: [
        {
          name: "block",
          on: (event: any) => {
            console.log("block", { event });
            // on every block we check if Ether balance has changed by re-fetching
            mutate(undefined, true);
          },
        },
      ],
    }
  );

  useEffect(() => {
    if (library !== undefined) {
      library.on("block", () => {
        mutate(undefined, true);
      });
      // remove listener when the component is unmounted
      return () => {
        library.removeAllListeners("block");
      };
    }
    // trigger the effect only on component mount
  }, [chainId]);


  if (!balance) {
    return <div>...</div>;
  }
  return <div>{parseFloat(formatEther(balance)).toPrecision(4)} Ξ</div>;
};

const Header = () => {
  const {
    chainId,
    account,
    library,
    activate,
    active,
  } = useWeb3React<Web3Provider>();

  const onClick = () => {
    activate(injectedConnector);
  };

  return (
    <Box>
      <Box onClick={onClick}>wallet connect</Box>
      <div>ChainId: {chainId}</div>
      {active && chainId && (
        <EtherSWRConfig
          value={{
            provider: library,
            refreshInterval: 30000,
          }}
        >
          <EthBalance />
        </EtherSWRConfig>
      )}
    </Box>
  );
};

export default Header;
