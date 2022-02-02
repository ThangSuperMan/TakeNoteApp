import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import AnimateSection from "../libs/animte-form";
import {
  Box,
  Heading,
  Text,
  Button,
  Center,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";

const Home = () => {
  return (
    <AnimateSection>
      <Box mt={20}>
        <Heading
          as="h2"
          color={useColorModeValue("blackAlphal100", "white")}
          fontSize="6xl"
          textAlign="center"
          lineHeight="70px"
        >
          Welcome to the
          <Text as="span" color="blue.300" display="block">
            Happy Note website
          </Text>
        </Heading>
        <Text
          mt={3}
          fontSize="20px"
          color="#718096"
          fontWeight="light"
          textAlign="center"
        >
          We are so happy to see you here,
          <Text>Please login for go to your dashboard notes!</Text>
        </Text>
        <Center mt={6}>
          <Button colorScheme="blue" variant="outline">
            <Link href="/login">
              <a>Login</a>
            </Link>
          </Button>
        </Center>
      </Box>
    </AnimateSection>
  );
};

export default Home;
