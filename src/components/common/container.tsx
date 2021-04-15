import { Flex, useColorMode, FlexProps } from "@chakra-ui/react";

export const Container = (props: FlexProps) => {

  const { colorMode } = useColorMode();

  
  // theme color 
  const bgColor = {
    light: "linear(to-r, #1b2039, #1b2039)",
    dark: "linear(to-br, #384699, #312d56)",
  };

  const color = { light: "white", dark: "white" };

  return (
    <Flex
      direction="column"
      bgGradient={bgColor[colorMode]}
      color={color[colorMode]}
      {...props}
    />
  );
};
