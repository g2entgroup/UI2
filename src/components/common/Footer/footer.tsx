import React from "react";
import {
  Grid,
  GridItem,
  Flex,
  Box,
  Heading,
  Text,
  Input,
} from "@chakra-ui/react";
import Header from "../Navbar/header";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail, AiOutlineGooglePlus } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { FiFacebook, FiLinkedin, FiTwitter } from "react-icons/fi";
import Image from "next/image";

const Footer = () => {
  return (
    <Box mx="4rem" bgColor="#161d2f">
      {/* logo  */}
      <Box textAlign="center" mb="3rem">
        <Image
          src="/g2.png"
          alt="Picture of the author"
          width={80}
          height={80}
        />
        <Heading fontSize="2rem">Creative</Heading>
        <Box>Token</Box>
      </Box>
      {/* 4 sliders  */}
      <Grid
        templateColumns="repeat(4, 1fr)"
        gap={4}
        justifyItems="center"
        justifyContent="center"
      >
        <Box w="90%">
          <Box as="h3" fontWeight="500" fontSize="xl" color="#e50168">
            Miraculous Template
          </Box>
          <Box
            mt="0.3rem"
            mb="1rem"
            h="1.5px"
            w="50px"
            background="linear-gradient(to right, rgba(22, 29, 47, 0),#e50168,rgba(22,29,47,0));"
          />
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            temporibus, labore delectus esse enim illum nihil magnam pariatur
            praesentium a recusandae sit molestiae hic ipsum optio reiciendis
            exercitationem nulla numquam.
          </Text>
        </Box>
        <Box w="90%">
          <Box as="h3" fontWeight="500" fontSize="xl" color="#e50168">
            Download our App
          </Box>
          <Box
            mt="0.3rem"
            mb="1rem"
            h="1.5px"
            w="50px"
            background="linear-gradient(to right, rgba(22, 29, 47, 0),#e50168,rgba(22,29,47,0));"
          />
          <Text>
            Go Mobile with our app.
            <br />
            Listen to your favourite songs at just one click. Download Now!
          </Text>
        </Box>
        <Box w="90%">
          <Box as="h3" fontWeight="500" fontSize="xl" color="#e50168">
            Subscribe
          </Box>
          <Box
            mt="0.3rem"
            mb="1rem"
            h="1.5px"
            w="50px"
            background="linear-gradient(to right, rgba(22, 29, 47, 0),#e50168,rgba(22,29,47,0));"
          />
          <Text>
            Subscribe to our newsletter and get latest updates and offers.
          </Text>

          {/* Input */}
          <Input
            focusBorderColor="#e50168"
            placeholder="Enter Your Name"
            mt="1rem"
          />
          <Input
            focusBorderColor="#e50168"
            placeholder="Enter Your Email"
            mt="1rem"
          />
          <Box
            bgColor="#e50168"
            textAlign="center"
            w="9rem"
            p="0.5rem"
            borderRadius="2rem"
            mt="1rem"
            cursor="pointer"
          >
            Sign Me Up
          </Box>
        </Box>
        <Box w="100%">
          <Box as="h3" fontWeight="500" fontSize="xl" color="#e50168">
            Contact Us
          </Box>
          <Box
            mt="0.3rem"
            mb="1rem"
            h="1.5px"
            w="50px"
            background="linear-gradient(to right, rgba(22, 29, 47, 0),#e50168,rgba(22,29,47,0));"
          />
          {/* phone  */}
          <Flex alignItems="center">
            <Box
              mr="1rem"
              bgGradient="linear(to-b, #2b5fa8, #e6006b)"
              px="0.6rem"
              py="0.5rem"
              borderRadius="0.4rem"
            >
              <BiPhoneCall />
            </Box>
            <Box>
              <Box>Call us:</Box>
              <Box>(+1) 202-555-0176, (+1) 2021-5501</Box>
            </Box>
          </Flex>
          {/* email  */}
          <Flex mt="1rem" alignItems="center">
            <Box
              mr="1rem"
              bgGradient="linear(to-b, #2b5fa8, #e6006b)"
              px="0.6rem"
              py="0.5rem"
              borderRadius="0.4rem"
              color="white"
            >
              <AiOutlineMail />
            </Box>
            <Box>
              <Box>Email us:</Box>
              <Box>demo@mail.com</Box>
            </Box>
          </Flex>

          {/* address  */}
          <Flex mt="1rem" alignItems="center">
            <Box
              mr="1rem"
              bgGradient="linear(to-b, #2b5fa8, #e6006b)"
              px="0.6rem"
              py="0.5rem"
              borderRadius="0.4rem"
            >
              <GoLocation />
            </Box>
            <Box>
              <Box>Walk in:</Box>
              <Box>598 Old House Drive, London</Box>
            </Box>
          </Flex>

          <Flex mt="1rem">
            <Box>Follow us:</Box>
            <Box
              mx="1rem"
              w="1.8rem"
              bgGradient="linear(to-b, #2b5fa8, #e6006b)"
              px="0.3rem"
              py="0.25rem"
              borderRadius="0.4rem"
              cursor="pointer"
            >
              <FiFacebook />
            </Box>
            <Box
              mr="1rem"
              w="1.8rem"
              bgGradient="linear(to-b, #2b5fa8, #e6006b)"
              px="0.3rem"
              py="0.25rem"
              borderRadius="0.4rem"
              cursor="pointer"
            >
              <FiLinkedin />
            </Box>

            <Box
              mr="1rem"
              w="1.8rem"
              bgGradient="linear(to-b, #2b5fa8, #e6006b)"
              px="0.3rem"
              py="0.25rem"
              borderRadius="0.4rem"
              cursor="pointer"
            >
              <FiTwitter />
            </Box>
            <Box
              mr="1rem"
              w="1.8rem"
              bgGradient="linear(to-b, #2b5fa8, #e6006b)"
              px="0.3rem"
              py="0.25rem"
              borderRadius="0.4rem"
              cursor="pointer"
            >
              <AiOutlineGooglePlus />
            </Box>
          </Flex>
        </Box>
      </Grid>

      {/* copmpany  */}

      <Box m="2rem" mb="1rem">
        {/* line  */}
        <Box
          m="1rem auto"
          h="2px"
          w="300px"
          background="linear-gradient(to right, rgba(22, 29, 47, 0),#e50168,rgba(22,29,47,0));"
        />
        {/* Copyright */}
        <Box textAlign="center">
          Copyright © 2018{" "}
          <Box as="text" color="#e50168">
            G2 Entertaonment Group, LLC
          </Box>
          . All Rights Reserved.
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
