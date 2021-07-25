import { HStack } from "@chakra-ui/layout";
import { IconButton, useMediaQuery } from "@chakra-ui/react";
import { FiHeart } from "react-icons/fi";
import { RiCoinsLine } from "react-icons/ri";
import React from "react";
import { MobileNavBarMenu } from "../modules/MobileNavBarMenu";

function NavBarMenuNavigation() {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return isLargerThan768 ? (
    <HStack spacing='1'>
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
      />
    </HStack>
  ) : (
    <MobileNavBarMenu />
  );
}

export { NavBarMenuNavigation };
