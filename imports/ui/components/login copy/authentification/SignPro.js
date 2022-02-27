import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/toast";
import { useState } from "react";
// import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
// import { registerProfessional } from "../../../redux/actions/user";
import React from "react";
const SignPro = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const toast = useToast();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [professionalSpecialty, setProfessionalSpecialty] = useState("");

  // const dispatch = useDispatch();
  // const submitHandler = () => {
  //   if (
  //     !professionalSpecialty ||
  //     !name ||
  //     !email ||
  //     !password ||
  //     !confirmpassword
  //   ) {
  //     toast({
  //       title: "Please Fill all the Feilds",
  //       status: "warning",
  //       duration: 5000,
  //       isClosable: true,
  //       position: "bottom",
  //     });

  //     return;
  //   }
  //   if (password !== confirmpassword) {
  //     toast({
  //       title: "Passwords Do Not Match",
  //       status: "warning",
  //       duration: 5000,
  //       isClosable: true,
  //       position: "bottom",
  //     });
  //     return;
  //   }
  //   dispatch(
  //     registerProfessional(
  //       {
  //         name,
  //         lastName,
  //         email,
  //         password,
  //         professionalSpecialty,
  //       },
  //       navigate
  //     )
  //   );
  //   toast({
  //     title: "Registration Successful",
  //     status: "success",
  //     duration: 5000,
  //     isClosable: true,
  //     position: "bottom",
  //   });
  // };
  return (
    <VStack spacing="5px">
      <FormControl id="specialty" isRequired>
        <FormLabel>Professional Specialty</FormLabel>
        <Select
          bg="white"
          placeholder="Select Your Specialty"
          onChange={(e) => setProfessionalSpecialty(e.target.value)}
        >
          <option value="driver">Driver</option>
          <option value="plumber">Plumber</option>
          <option value="electrician">Electrician</option>
          <option value="gardener">Gardener</option>
          <option value="transporter">Transporter</option>
          <option value="mechanical">Mechanical</option>
          <option value="Other">Other</option>
        </Select>
      </FormControl>
      <FormControl id="first-nameP" isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          bg="white"
          placeholder="Enter Your Name"
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
      <FormControl id="last-nameP" isRequired>
        <FormLabel>Last Name</FormLabel>
        <Input
          bg="white"
          placeholder="Enter Your Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />
      </FormControl>
      <FormControl id="emailP" isRequired>
        <FormLabel>Email Address</FormLabel>
        <Input
          bg="white"
          type="email"
          placeholder="Enter Your Email Address"
          onChange={(e) => setEmail(e.target.value.toLocaleLowerCase())}
        />
      </FormControl>
      <FormControl id="passwordP" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup size="md">
          <Input
            bg="white"
            type={show ? "text" : "password"}
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl id="confirm-passwordP" isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup size="md">
          <Input
            bg="white"
            type={show ? "text" : "password"}
            placeholder="Confirm password"
            onChange={(e) => setConfirmpassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        // onClick={}
      >
        Sign Up
      </Button>
    </VStack>
  );
};

export default SignPro;
