import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React from "react";
import SignPro from "./SignPro";
import SignUser from "./SignUser";

const SignUp = () => {
  return (
    <div>
      <Tabs isFitted variant="soft-rounded">
        <TabList mb="1em">
          <Tab>Client</Tab>
          <Tab>Professionnel</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <SignUser />
          </TabPanel>
          <TabPanel>
            <SignPro />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default SignUp;
