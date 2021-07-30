import React, { useState } from "react";
import { Text, Box, Flex, Image, HStack, IconButton } from "@chakra-ui/react";
import useInterval from "../../hooks/useInterval";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const SLIDES_INTERVAL_TIME = 5000;
const ANIMATION_DIRECTION = "right";

interface CarouselImagesProps {
  images: Array<{
    src: string;
    alt?: string;
  }>;
}

const CarouselImages = ({ images }: CarouselImagesProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };
  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };
  const setSlide = (slide: number) => {
    setCurrentSlide(slide);
  };
  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`
  };

  const slidesCount = images.length;
  useInterval(() => {
    ANIMATION_DIRECTION.toLowerCase() === "left" ? prevSlide() : nextSlide();
  }, SLIDES_INTERVAL_TIME);

  const onUserClickNextSlide = () => {
    nextSlide();
  };
  const onUserClickPrevSlide = () => {
    prevSlide();
  };

  return (
    <Flex
      w='full'
      alignItems='center'
      justifyContent='center'
      pos='relative'
      role='group'
    >
      <IconButton
        userSelect='none'
        position='absolute'
        aria-label='Go to previous slide'
        size='lg'
        boxShadow='xl'
        colorScheme='whiteAlpha'
        isRound
        onClick={() => {
          onUserClickPrevSlide();
        }}
        display='none'
        _groupHover={{
          display: "inline-flex"
        }}
        left='0%'
        fontSize='2rem'
        icon={<RiArrowLeftSLine color='black' />}
      />
      <IconButton
        userSelect='none'
        position='absolute'
        boxShadow='xl'
        colorScheme='whiteAlpha'
        aria-label='Go to previous slide'
        size='lg'
        onClick={() => {
          onUserClickNextSlide();
        }}
        display='none'
        _groupHover={{
          display: "inline-flex"
        }}
        right='0%'
        isRound
        fontSize='2rem'
        icon={<RiArrowRightSLine color='black' />}
      />

      <Flex w='100rem' overflow='hidden' pos='relative'>
        <Flex height={[140, 340]} w='full' {...carouselStyle}>
          {images.map((slide, sid) => (
            <Box key={`slide-${sid}`} boxSize='full' shadow='md' flex='none'>
              <Image
                src={slide.src}
                boxSize='full'
                alt={slide.alt}
                backgroundSize='cover'
              />
            </Box>
          ))}
        </Flex>

        <HStack justify='center' pos='absolute' bottom='8px' w='full'>
          {Array.from({ length: slidesCount }).map((_, slide) => (
            <Box
              key={`dots-${slide}`}
              cursor='pointer'
              boxSize={["7px", "15px"]}
              m='0 2px'
              bg={currentSlide === slide ? "blackAlpha.800" : "blackAlpha.500"}
              rounded='50%'
              display='inline-block'
              transition='background-color 0.6s ease'
              _hover={{ bg: "blackAlpha.800" }}
              onClick={() => setSlide(slide)}
            ></Box>
          ))}
        </HStack>
      </Flex>
    </Flex>
  );
};
export { CarouselImages };
