import { Box, Heading, BoxProps } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { ReactNode } from "react";
import { ElementSlider, ElementSliderProps } from "../elements/ElementSlider";

interface SliderSectionItemsProps
  extends Omit<ElementSliderProps, "children">,
    BoxProps {
  title: string;
  children: ReactNode;
}

function SliderSectionItems({
  spacing,
  amountOfItemInScreen,
  elementWidth,
  children,
  title,
  ...restProps
}: SliderSectionItemsProps) {
  return (
    <Box {...restProps} maxW='container.xl' marginX='auto'>
      <Heading fontFamily='fireSans' color='gray.600' fontWeight='300'>
        {title}
      </Heading>
      <ElementSlider
        elementWidth={elementWidth}
        spacing={spacing}
        amountOfItemInScreen={amountOfItemInScreen}
      >
        {children}
      </ElementSlider>
    </Box>
  );
}

export { SliderSectionItems };
