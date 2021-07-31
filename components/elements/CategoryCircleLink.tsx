import { Circle, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

interface CategoryCircleLinkProps {
  text: string;
  href: string;
}

function CategoryCircleLink({ text, href }: CategoryCircleLinkProps) {
  return (
    <LinkBox cursor='pointer'>
      <NextLink href={href}>
        <LinkOverlay>
          <Circle
            bgGradient='linear(red.100 0%, orange.100 25%, yellow.100 50%)'
            size={[210, 270]}
          >
            <Text
              textAlign='center'
              fontFamily='fireSans'
              fontWeight='bold'
              fontSize={["xl", "2xl", "3xl"]}
            >
              {text}
            </Text>
          </Circle>
        </LinkOverlay>
      </NextLink>
    </LinkBox>
  );
}

export { CategoryCircleLink };
