import { Flex, useColorMode, FlexProps } from "@chakra-ui/react";

export const Container = (props: FlexProps) => {

  const { colorMode } = useColorMode();

  
  const bgColor = {
    light: "linear(to-r, #fefbd6, #fefbd6)",
    dark: "linear(to-br, #384699, #312d56)",
  };

  const color = { light: "black", dark: "white" };

  return (
    <Flex
      direction="column"
      bgGradient={bgColor[colorMode]}
      color={color[colorMode]}
      {...props}
    />
  );
};
