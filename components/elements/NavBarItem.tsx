import { Box, Text, VStack } from "@chakra-ui/layout";
import React, { useEffect, useRef, useState } from "react";
import { MenuSection } from "../../models/menu_section";

function NavBarItem({ categories, sectionTitle }: MenuSection) {
  const divRef = useRef<HTMLDivElement>(null);
  const [isHover, setIsHover] = useState(false);
  useEffect(() => {
    if (divRef.current && isHover) {
      let element = divRef.current;
      const wrect = element.getBoundingClientRect();
      let prevHeight = wrect.height + "px";

      // set the height auto to get the amount of PX that it will take with
      // the content inside
      element.style.opacity = "0";
      element.style.height = "auto";
      let rect = element.getBoundingClientRect();
      let newHeight = rect.height;

      // // That temporary height is never rendered in the browser
      // //   Restore the original height before any rendering
      element.style.height = prevHeight;

      // // Start Animation in next Animation frame from original height to new height
      // //  Reveal the contents via opacity animation

      requestAnimationFrame(() => {
        element.style.height = newHeight + "px";
        element.style.transitionDuration = "0.2s";
        element.style.transitionTimingFunction = "ease";
        element.style.opacity = "1";
      });
    } else if (!isHover && divRef.current) {
      let element = divRef.current;
      element.style.opacity = "0";
      element.style.height = "0px";
    }
  }, [isHover]);

  const toggleHoverState = () => {
    setIsHover((prevState) => !prevState);
  };
  return (
    <Box
      position='relative'
      onMouseEnter={toggleHoverState}
      color='gray.600'
      spacing='0'
      backgroundColor='white'
      onMouseLeave={toggleHoverState}
      _hover={{
        backgroundColor: "blackAlpha.100",
        color: "black",
        boxShadow: "inset 0 -2px 0 black"
      }}
    >
      <Text
        p='1rem'
        textAlign='center'
        _hover={{
          cursor: "pointer"
        }}
        fontFamily='fireSans'
        fontWeight='400'
      >
        {sectionTitle}
      </Text>
      <Box
        ref={divRef}
        boxShadow='1px 0px 5px 1px rgb(0 0 0 / 5%)'
        borderBottom='1px solid black'
        backgroundColor='#fff'
        display={isHover ? "block" : "none"}
        position='absolute'
        w='max-content'
        minW='100%'
        top='100%'
        style={{
          height: "0",
          opacity: "0",
          overflow: "hidden"
        }}
        // height='0px'
        // opacity='0'
        // overflow='hidden'
      >
        {categories.map((category) => (
          <Box
            p='4'
            _hover={{
              backgroundColor: "blackAlpha.100"
            }}
          >
            <Text
              _hover={{
                cursor: "pointer"
              }}
              fontFamily='roboto'
            >
              {category.name}
            </Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export { NavBarItem };
