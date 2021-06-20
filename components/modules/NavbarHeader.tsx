import { HStack } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import React from "react";
import { mockCategories } from "../../contansts/mockCagategories";
import { NavBarItem } from "../elements/NavBarItem";

function NavbarHeader() {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return isLargerThan768 ? (
    <HStack
      // maxW='container.xl'
      w='100%'
      as='nav'
      spacing='0'
      alignItems='stretch'
    >
      {mockCategories.map((categoryMock) => (
        <NavBarItem {...categoryMock} />
      ))}
    </HStack>
  ) : null;
}

export { NavbarHeader };
