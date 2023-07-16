import React, { useState } from "react";

import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Divider,
  Badge,
} from "@chakra-ui/react";
import {
  Button,
  InputGroup,
  InputLeftAddon,
  Input,
  Avatar,
  Card,
  CardBody,
} from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Edit_Profile = () => {
  const [usernamed, setusername] = useState("");
  const [passwordd, setpassword] = useState("");
  const [usn, setusn] = useState(0);
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  // eslint-disable-next-line
  const port = "http://localhost:7000";
  // eslint-disable-next-line
  const Port = "https://expensive-hem-elk.cyclic.app";
  let navigate = useNavigate();

  function handleFileChange(event) {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  }
  async function clicki(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    const dat = {
      name: usernamed.toLowerCase(),
      usn: usn,
      password: passwordd,
    };
    console.log(dat);
    formData.append("data", JSON.stringify(dat));
    console.log(dat);
    if (usernamed === "" || passwordd === "" || usn === "") {
      alert("all the form elements should be filled");
    } else {
      const response = await axios.post(port + "/api/user/signup", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        }, // set the content type to multipart form data
      });
      if (response.data != null) {
        setImageUrl(response.data.url);
        navigate("/login");
        // alert("Done");
      }
    }
  }
  return (
    <>
      <Card margin="5" bg="black" borderRadius={10}>
        <Tabs mt="5" padding="auto" variant="soft-rounded" colorScheme="green">
          <TabList justifyContent={"center"}>
            <Tab color="white">Create Account</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Card mt="10" boxShadow={"dark-lg"}>
                <CardBody>
                  <center>
                    <Badge>
                      <Avatar
                        mb="3"
                        size="2xl"
                        src={
                          File
                            ? File
                            : "https://ik.imagekit.io/aj4rz7nxsa/av5c8336583e291842624_0079_2pC4.png"
                        }
                      />
                    </Badge>
                  </center>
                  <center>
                    {/* <Badge mb="5" colorScheme="green">
                      <Input type="file"  />
                    </Badge> */}
                    <Input
                      w="full"
                      placeholder="Choose image"
                      backgroundColor={"white"}
                      fontWeight={57}
                      color={"blackAlpha.600"}
                      type="file"
                      onChange={handleFileChange}
                    />
                  </center>
                  <Divider mb="10" />
                  <InputGroup>
                    <InputLeftAddon children="Name" />
                    <Input
                      maxLength={20}
                      mb="5"
                      type="text"
                      placeholder="Name of the person"
                      onChange={(e) => {
                        setusername(e.target.value);
                      }}
                    />
                  </InputGroup>

                  <InputGroup>
                    <InputLeftAddon children="Phone No." />
                    <Input
                      maxLength={10}
                      mb="5"
                      type="text"
                      placeholder="USN"
                      onChange={(e) => {
                        if (e.target.value.length > 10) {
                          e.target.value = e.target.value.slice(0, 10);
                        }
                        setusn(e.target.value.toString());
                      }}
                    />
                  </InputGroup>
                  <InputGroup>
                    <InputLeftAddon children="Password" />
                    <Input
                      maxLength={20}
                      mb="5"
                      type="text"
                      placeholder="Password"
                      onChange={(e) => {
                        setpassword(e.target.value);
                      }}
                    />
                  </InputGroup>
                  <Divider />
                  <Button colorScheme="green" onClick={clicki}>
                    Submit
                  </Button>
                </CardBody>
              </Card>
              <Button mt="5" colorScheme="red" onClick={() => {}}>
                <ChevronLeftIcon boxSize={8} />
                Go Back
              </Button>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </>
  );
};

export default Edit_Profile;
