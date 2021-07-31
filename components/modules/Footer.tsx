import {
  Box,
  Container,
  IconButton,
  Link,
  Stack,
  Text
} from "@chakra-ui/react";
import { FaHeart, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <Box bg={"gray.50"} color={"gray.700"}>
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Text
          fontFamily='fireSans'
          fontSize='1.5rem'
          style={{
            fontSize: "clamp(1.3rem, 3vw, 2.1rem)"
          }}
          fontWeight='300'
        >
          DAKITI
        </Text>
        <Stack direction={"row"} spacing={6}>
          <Link href={"#"}>Home</Link>
          <Link href={"#"}>About</Link>
          <Link href={"#"}>Contact</Link>
        </Stack>
      </Container>

      <Box borderTopWidth={1} borderStyle={"solid"} borderColor={"gray.200"}>
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text d='flex' alignItems='center'>
            © 2021 MADE WITH
            <FaHeart
              style={{
                color: "#E53E3E",
                margin: "0.25rem"
              }}
            />
            BY ISAAC
          </Text>
          <Stack direction={"row"} spacing={6}>
            <IconButton
              as={Link}
              isRound
              aria-label={"Github"}
              target={"_blank"}
              href={"https://github.com/BigDog1400"}
            >
              <FaGithub />
            </IconButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
