import Navbar from "../navbar.js";
import { Container } from "@chakra-ui/react";
import Head from "next/head";

const Main = ({ children }) => {
  return (
    <>
      <Head>
        <title>Thang Todo | Homepage</title>
      </Head>
        <Navbar />
      <Container as="main" maxW="container.md" centerContent>
        {children}
      </Container>
    </>
  );
};

export default Main;
