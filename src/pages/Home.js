import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import
'./Home.css'
import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Button, // Added Button component from Chakra UI
} from "@chakra-ui/react";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";


function Homepage() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    console.log(user);

    if (user) {
      // User is logged in, navigate to the chat page
      navigate('/front');
    }
  }, [navigate]);


  return (
    <>
      <Container maxW="xl" centerContent>
        <Box
          d="flex"
          justifyContent="center"
          p={3}
          bg="white"
          w="100%"
          m="40px 0 15px 0"
          borderRadius="lg"
          borderWidth="1px"
        >
          <Text 
          className='textimp'fontSize="4xl" color="black" fontFamily="Work sans" textAlign='center'>
            MONEYMEMENTO
          </Text>
        </Box>
        <Box 
        className="important"
        bg='white' w="100%" p={4} borderRadius="lg" borderWidth="1px">
          <Tabs isFitted variant="soft-rounded">
            <TabList mb="1em">
              <Tab>LOGIN TO CHAT</Tab>
              <Tab>REGISTER TO CHAT</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Login />
              </TabPanel>
              <TabPanel>
                <Signup />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
       
      </Container>
    </>
  );
}

export default Homepage;
