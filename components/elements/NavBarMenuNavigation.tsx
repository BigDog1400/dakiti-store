import { HStack } from "@chakra-ui/layout";
import { IconButton, useMediaQuery } from "@chakra-ui/react";
import { FiHeart } from "react-icons/fi";
import { RiCoinsLine } from "react-icons/ri";
import React from "react";
import { MobileMenu } from "../modules/MobileMenu";

function NavBarMenuNavigation() {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return (
    <HStack spacing='1'>
      {isLargerThan768 ? (
        <>
          <IconButton
            colorScheme='gray'
            variant='outline'
            fontSize='20px'
            aria-label='Items favoritos'
            icon={<FiHeart />}
          />
          <IconButton
            colorScheme='gray'
            variant='outline'
            fontSize='20px'
            aria-label='Moneda Seleccionada'
            icon={<RiCoinsLine />}
          />{" "}
        </>
      ) : (
        <MobileMenu />
      )}
    </HStack>
  );
}

export { NavBarMenuNavigation };
