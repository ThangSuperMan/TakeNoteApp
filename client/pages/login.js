import { Button, Input, Box, Stack, Heading, Text } from "@chakra-ui/react";
import AnimateForm from "../libs/animte-form";
import Axios from "axios";

//export async function getStaticProps() {
//const data = await Axios.get("http://localhost:3001/api/login");

//return {
//props: {},
//};
//}
//

const Login = () => {
  const handleLogin = () => {
    console.log("handle login");

    Axios.get("http://localhost:3001/api/login");
  };
  return (
    <AnimateForm>
      <Box width="300px">
        <Heading
          as="h3"
          textAlign="center"
          mt={14}
          mb={10}
          fontSize="5xl"
          color="blue.300"
        >
          Login
        </Heading>
        <Stack spacing="3" mt="3" mb={2}>
          <Box>
            <Text fontSize="19px" mb={1}>
              Username
            </Text>
            <Input placeholder="Username" />
          </Box>
          <Box>
            <Text fontSize="19px" mb={1}>
              Password
            </Text>
            <Input placeholder="Password" />
          </Box>
        </Stack>
        <Button onClick={handleLogin} width="100%" colorScheme="blue" mt={5}>
          Login
        </Button>
      </Box>
    </AnimateForm>
  );
};

export default Login;
