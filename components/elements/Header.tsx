import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { HStack, Spacer, Text, VStack } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import React from "react";
import { NavbarHeader } from "../modules/NavbarHeader";
import { NavBarMenuNavigation } from "./NavBarMenuNavigation";

function Header() {
  return (
    <VStack paddingTop='0.5rem' backgroundColor='#f7f8fa' w='100%' spacing='0'>
      <HStack
        paddingLeft='1rem'
        paddingRight='1rem'
        marginBottom='1rem'
        w='100%'
        spacing={["0.5rem", "1rem"]}
        maxW='container.xl'
      >
        <Text
          fontFamily='fireSans'
          fontSize='1.5rem'
          style={{
            fontSize: "clamp(1.3rem, 3vw, 2.1rem)"
          }}
          fontWeight='300'
        >
          DAKITI
        </Text>
        <Spacer></Spacer>
        <InputGroup maxW='600px'>
          <InputLeftElement
            pointerEvents='none'
            children={<SearchIcon color='gray.300' />}
          />
          <Input
            backgroundColor='white'
            type='tel'
            placeholder='Buscar productos'
          />
        </InputGroup>
        <Spacer></Spacer>
        <NavBarMenuNavigation />
      </HStack>
      <NavbarHeader />
    </VStack>
  );
}

export { Header };
