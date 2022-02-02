import "../styles/globals.css";
import Layout from "../components/layouts/main";
import { ChakraProvider } from "@chakra-ui/react";

function Website({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default Website;
