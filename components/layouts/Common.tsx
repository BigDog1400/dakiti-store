import { Box, Container } from "@chakra-ui/layout";
import React from "react";
import { Header } from "../elements/Header";

type CommonLayoutProps = {
  children: React.ReactNode;
};

function CommonLayout({ children }: CommonLayoutProps) {
  return (
    <Box>
      <Header />
      <Container as='main' maxW='container.xl'>
        {children}
      </Container>
    </Box>
  );
}

export { CommonLayout };
