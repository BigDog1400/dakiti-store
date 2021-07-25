import { HStack, IconButton } from "@chakra-ui/react";
import React from "react";
import { FiHeart } from "react-icons/fi";
import { RiCoinsLine } from "react-icons/ri";

function DesktopNavBarMenu() {
  return (
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
  );
}

export default DesktopNavBarMenu;
