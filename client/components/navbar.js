import { Flex, Box, Heading, useColorModeValue } from "@chakra-ui/react";
import LinkNext from "next/link";
import ThemeToggleButton from "./theme-toggle-button";
import styled from "@emotion/styled";

const TextLink = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: #63b3ed;

  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => {
  return (
    <Box bg={useColorModeValue("gray.100", "whiteAlpha.200")}>
      <Flex
        maxW="container.lg"
        m="0 auto"
        p="2"
        pr="3"
        pl="3"
        justifyContent="space-between"
      >
        <Box display="flex" alignItems="center">
          <LinkNext href="/">
            <a>
              <Heading
                as="h2"
                fontWeight="500"
                mr="4"
                fontSize="x-large"
                color="blue.300"
              >
                Happy Note
              </Heading>
            </a>
          </LinkNext>
          <Flex align="center" transform="translateY(2px)">
            <Box mr="3">
              <LinkNext href="/">
                <a>
                  <TextLink>Home</TextLink>
                </a>
              </LinkNext>
            </Box>
            <Box mr="3">
              <LinkNext href="/register">
                <a>
                  <TextLink>Register</TextLink>
                </a>
              </LinkNext>
            </Box>
            <Box>
              <LinkNext href="/login">
                <a>
                  <TextLink>Login</TextLink>
                </a>
              </LinkNext>
            </Box>
          </Flex>
        </Box>
        <ThemeToggleButton />
      </Flex>
    </Box>
  );
};

export default Navbar;
