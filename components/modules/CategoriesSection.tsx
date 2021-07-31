import { Box, Heading, HStack, StackProps, VStack } from "@chakra-ui/react";
import React from "react";
import { CategoryCircleLink } from "../elements/CategoryCircleLink";

interface CategoriesSectionProps extends StackProps {
  categories: Array<{
    title: string;
    href: string;
  }>;
}

function CategoriesSection({
  categories,
  ...restProps
}: CategoriesSectionProps) {
  return (
    <VStack maxW='container.xl' marginX='auto' {...restProps}>
      <Heading
        fontFamily='fireSans'
        textAlign='center'
        color='gray.600'
        fontWeight='300'
      >
        Comprar por categoria
      </Heading>
      <HStack justifyContent='space-around' paddingTop='2rem' flexWrap='wrap'>
        {categories.map((category, index) => {
          return (
            <Box key={index} p={5}>
              <CategoryCircleLink href={category.href} text={category.title} />
            </Box>
          );
        })}
      </HStack>
    </VStack>
  );
}

export { CategoriesSection };
