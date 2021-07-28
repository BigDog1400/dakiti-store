import { HStack, IconButton, StackProps } from "@chakra-ui/react";
import React, { ReactNode, useRef } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { scrollElementTo } from "../../utils/scrollElementTo";

const CHAKRA_PIXEL_UNIT_BASE = 4;

interface ElementSliderProps {
  children: ReactNode;
  elementWidth: number;
  spacing: StackProps["spacing"];
  amountOfItemInScreen: number;
}

function ElementSlider({
  amountOfItemInScreen,
  elementWidth,
  children,
  spacing
}: ElementSliderProps) {
  const ref = useRef<HTMLDivElement>(null);

  const scrollAmount =
    amountOfItemInScreen * elementWidth +
    amountOfItemInScreen * (Number(spacing) * CHAKRA_PIXEL_UNIT_BASE);

  return (
    <HStack
      marginX='auto'
      as='section'
      marginTop='2rem'
      maxW='container.xl'
      position='relative'
      role='group'
    >
      <IconButton
        aria-label='Go to previous slide'
        borderRadius='full'
        size='lg'
        position='absolute'
        onClick={() => {
          if (ref.current) {
            scrollElementTo("left", ref.current, scrollAmount);
          }
        }}
        display='none'
        _groupHover={{
          display: "inline-flex"
        }}
        left='0%'
        fontSize='2rem'
        icon={<RiArrowLeftSLine color='black' />}
      />
      <HStack
        paddingBottom='7'
        ref={ref}
        spacing={spacing}
        paddingX={1}
        overflowX='scroll'
        sx={{
          scrollbarColor: "transparent transparent",
          _hover: {
            scrollbarColor: "#757575 transparent"
          },
          "&::-webkit-scrollbar": {
            height: "10px",
            backgroundColor: `rgba(0, 0, 0, 0)`
          },
          "&::-webkit-scrollbar-thumb": {
            borderRadius: "7px",
            border: "solid rgba(0, 0, 0, 0.0)",
            borderWidth: "1px 0",
            backgroundClip: "content-box",
            boxShadow: "inset 0 0 0 10px rgba(0, 0, 0, 0.1)"
          }
        }}
      >
        {children}
      </HStack>
      <IconButton
        aria-label='Go to next slide'
        borderRadius='full'
        fontSize='2rem'
        position='absolute'
        display='none'
        _groupHover={{
          display: "inline-flex"
        }}
        onClick={() => {
          if (ref.current) {
            scrollElementTo("right", ref.current, scrollAmount);
          }
        }}
        right='0%'
        size='lg'
        icon={<RiArrowRightSLine />}
      />
    </HStack>
  );
}

export { ElementSlider };
