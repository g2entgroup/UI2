import React from "react";

import { Box, Badge, Image } from "@chakra-ui/react";
import Icon from "@chakra-ui/icon";
import ReactPlayer from 'react-player/lazy'


const StarIcon = ({ color }) => <Icon name="star" color={color} />

export default function CreativeCard() {
  const property = {
    videoUrl: "https://youtu.be/wQlN0BVltZI",
    imageAlt: "Tesla Campaign",
    crtv: 40,
    apr: 18.78,
    title: "Tesla - Model Y",
    formattedPrice: "$79,900.00",
    reviewCount: 34,
    rating: 4
  };

  return (
    <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden">
      <ReactPlayer 
        url={property.videoUrl}
        playing={true}
        loop={true}
      />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge rounded="full" px="2" variantColor="pink">
            New
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {property.crtv} CRTV &bull; {property.apr} % APR
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {property.title}
        </Box>

        <Box>
          {property.formattedPrice}
          <Box as="span" 
            bgGradient="linear(to-l, #7928CA, #e50168)"
            bgClip="text"
            fontSize="lg"
            fontWeight="extrabold" 
          >
             / Weekly Prize
          </Box>
        </Box>

        <Box d="flex" mt="2" alignItems="center">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < property.rating ? "pink.500" : "gray.300"}
              />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {property.reviewCount} reviews
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

// export default CreativeCard;
