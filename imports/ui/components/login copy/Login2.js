import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import "./log.css";
import { useNavigate } from "react-router-dom";
import Login from "./authentification/Loginn";
import SignPro from "./authentification/SignUpp";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
const Login2 = () => {
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //     navigate("/");
  //   }
  // }, [navigate]);

  return (
    <ChakraProvider>
      <div className="logg">
        <Container
          maxW="container.md"
          centerContent
          m="12vh auto 0"
          pb={"5vh"}
          minH="85vh"
        >
          <Box
            d="flex"
            justifyContent="center"
            p={3}
            bg="#f5f5f5"
            w="100%"
            m="40px 0 15px 0"
            borderRadius="lg"
            borderWidth="1px"
          >
            <Text fontSize="3xl">Welcome Abroad</Text>
          </Box>
          <Box bg="#f5f5f5" w="100%" p={4} borderRadius="lg" borderWidth="1px">
            <Tabs isFitted variant="soft-rounded">
              <TabList mb="1em">
                <Tab>Login</Tab>
                <Tab>Sign Up</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Login></Login>
                </TabPanel>
                <TabPanel>
                  <SignPro />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Container>
      </div>
    </ChakraProvider>
  );
};

export default Login2;
