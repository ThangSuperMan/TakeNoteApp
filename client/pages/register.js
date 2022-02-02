import { Button, Input, Box, Stack, Heading, Text } from "@chakra-ui/react";
import AnimateForm from "../libs/animte-form";
import Axios from "axios";
import { useState, useEffect } from "react";

//export const getStaticProps = ()

const Register = () => {
  const [nameUser, setNameUser] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {}, []);

  const handleInputNameUser = (e) => {
    setNameUser(e.target.value);
  };

  const handleInputUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleInputPassword = (e) => {
    setPassword(e.target.value);
  };

  const sendInfoRegisterAccount = async () => {
    if (nameUser !== "" && username !== "" && password !== "") {
      const infoRegister = {
        nameUser: nameUser,
        username: username,
        password: password,
      };

      console.log(infoRegister);

      await Axios.post("http://localhost:3001/api/register-account", {
        infoAccountRegister: infoRegister,
      }).then((r) => {
        console.log(r);
      });
    }

    // Reset the value of inputs
    setNameUser("");
    setUsername("");
    setPassword("");
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
          Register
        </Heading>
        <Stack spacing="3" mt="5" mb={2}>
          <Box>
            <Text mb={1} fontSize="19px">
              Your name
            </Text>
            <Input
              onChange={handleInputNameUser}
              value={nameUser}
              placeholder="Your name"
            />
          </Box>
          <Box>
            <Text mb={1} fontSize="19px">
              Username
            </Text>
            <Input
              onChange={handleInputUsername}
              value={username}
              placeholder="Username"
            />
          </Box>
          <Box>
            <Text mb={1} fontSize="19px">
              Password
            </Text>
            <Input
              onChange={handleInputPassword}
              value={password}
              placeholder="Password"
            />
          </Box>
        </Stack>
        <Button
          onClick={sendInfoRegisterAccount}
          width="100%"
          colorScheme="blue"
          mt={5}
        >
          Register
        </Button>
      </Box>
    </AnimateForm>
  );
};

export default Register;
