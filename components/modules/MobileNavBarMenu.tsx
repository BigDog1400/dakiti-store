import { IconButton } from "@chakra-ui/button";
import {
  ArrowBackIcon,
  ArrowForwardIcon,
  ArrowLeftIcon,
  HamburgerIcon
} from "@chakra-ui/icons";
import { useMediaQuery } from "@chakra-ui/media-query";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay
} from "@chakra-ui/modal";
import { HStack, Spacer, Text, useDisclosure, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { FiArrowLeft, FiSkipBack } from "react-icons/fi";
import {
  RiArrowGoBackFill,
  RiArrowGoBackLine,
  RiArrowLeftCircleFill,
  RiArrowLeftSFill,
  RiArrowRightCircleFill,
  RiSkipBackFill
} from "react-icons/ri";
import { mockCategories } from "../../contansts/mockCagategories";
import { MenuSection } from "../../types/menu_section";

type MenuItemsProps = {
  sections: MenuSection[];
};

function MenuItems({ sections }: MenuItemsProps) {
  const [
    currentCategorySelected,
    setCurrentCategorySelected
  ] = useState<string>("");
  return (
    <VStack
      fontFamily='fireSans'
      height='100vh'
      position='relative'
      marginTop='2rem'
      overflow='hidden'
      w='100%'
    >
      <VStack
        transform='auto'
        translateX={currentCategorySelected ? "-100%" : 0}
        w='100%'
        transition='0.25s'
      >
        {sections.map((element) => (
          <>
            <HStack
              onClick={() => setCurrentCategorySelected(element.sectionTitle)}
              p='2'
              fontSize='1.5rem'
              w='100%'
            >
              <Text fontFamily='fireSans' fontWeight='400'>
                {element.sectionTitle}
              </Text>
              <Spacer />
              <ArrowForwardIcon />
            </HStack>
          </>
        ))}
      </VStack>
      <VStack w='100%'>
        {sections.map((element) => (
          <VStack
            w='100%'
            position='absolute'
            top='0%'
            transition='0.25s'
            left={currentCategorySelected === element.sectionTitle ? 0 : "100%"}
          >
            <HStack
              paddingTop='2rem'
              paddingBottom='2rem'
              fontSize='1.2rem'
              alignSelf='flex-start'
              cursor='pointer'
              onClick={() => setCurrentCategorySelected("")}
            >
              <RiArrowLeftCircleFill color='black' />
              <Text>Todo</Text>
            </HStack>
            <HStack
              spacing='0.5'
              alignSelf='flex-start'
              paddingBottom='1rem'
              fontSize='2rem'
            >
              <Text>{currentCategorySelected}</Text>
            </HStack>
            {element.categories.map((category) => (
              <HStack fontSize='1.4rem' p='1' w='100%'>
                <Text color='gray.700'>{category.name}</Text>
                <Spacer />
                <RiArrowRightCircleFill />
              </HStack>
            ))}
          </VStack>
        ))}
      </VStack>
    </VStack>
  );
}

function MobileNavBarMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton
        colorScheme='gray'
        variant='outline'
        fontSize='20px'
        aria-label='Menu Mobile'
        icon={<HamburgerIcon />}
        onClick={onOpen}
      />
      <Drawer onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody overflow='hidden'>
            <MenuItems sections={mockCategories} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export { MobileNavBarMenu };
