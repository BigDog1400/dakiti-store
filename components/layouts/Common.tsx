import { Box, Container } from "@chakra-ui/layout";
import { ContainerProps } from "@chakra-ui/react";
import React from "react";
import { Header } from "../elements/Header";

type CommonLayoutProps = {
  children: React.ReactNode;
  maxW?: ContainerProps["maxW"];
};

function CommonLayout({ maxW = "container.xl", children }: CommonLayoutProps) {
  return (
    <Box>
      <Header />
      <Container as='main' maxW={maxW}>
        {children}
      </Container>
    </Box>
  );
}

export { CommonLayout };
