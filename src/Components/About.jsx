import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Link,
    Text,
    useBreakpointValue,
    Avatar
  } from "@chakra-ui/react";
  import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";
  import Typed from "react-typed";
  import Profile from "../Assets/mypic.png"  
  import ReactTyped from "react-typed";
  import Resume from "../Assets/Rohit_Mourya_Resume.pdf"
  
  export default function About() {
    return (
      <Stack
        minH={{base:"100vh",lg:"100vh",md:"60vh"}}
        direction={{ base: "column", md: "row" }}
        pt={10}
        id="About"
      >
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"xl"}>
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
              <Text
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  height: useBreakpointValue({ base: "20%", md: "30%" }),
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "blue.400",
                  zIndex: -1,
                }}
              >
                Hi, I Am
              </Text>
              <br />
              <Text color={"blue.400"} as={"span"}>
                <Typed
                  strings={[
                    "Rohit Mourya",
                    "A Full-Stack Developer"
                  ]}
                  typeSpeed={150}
                  backSpeed={100}
                  loop
                ></Typed>
              </Text>
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            A passionate full-stack web developer, who loves to buid nice projects and work in a team. I want to achieve global recognition and exposure with my skillset, toolset and mindset.
            </Text>
            <Flex gap={2}>
          <Text color={"blue.400"} fontWeight={"bold"}>Phone Number ➠ </Text>
          <Link href={"tel:+9927866974"} isExternal bg="transparent" color={"gray.500"}>
            +91 9927866974
          </Link>
        </Flex>
        <Flex gap={2} mb={5}>
          <Text color={"blue.400"} fontWeight={"bold"}>Email-ID ➠ </Text>
          <Link
            href={"mailto: rohitmourya0012@gmail.com"}
            isExternal
            bg="transparent"
            color={"gray.500"}
          >
            rohitmourya0012@gmail.com
          </Link>
        </Flex>
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <Button
                rounded={"full"}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                <Link
                  style={{ textDecoration: "none" }}
                  href={Resume}
                  // target={"_blank"}
                  download='Rohit_Mourya_Resume'
                >
                  My Resume
                </Link>
              </Button>
              <Button rounded={"full"}>
                <Link
                  style={{ textDecoration: "none" }}
                  target={"_blank"}
                  href="https://github.com/MrRohitMI"
                >
                  My Projects
                </Link>
              </Button>
            </Stack>
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <Button>
                <Link
                  href="https://www.linkedin.com/in/rohit-mourya/"
                  target={"_blank"}
                >
                  <BsLinkedin />
                </Link>
              </Button>
              {/* <Button>
                <Link href="#" target={"_blank"}>
                  <BsTwitter />
                </Link>
              </Button> */}
              <Button>
                <Link href="https://github.com/MrRohitMI" target={"_blank"}>
                  <BsGithub />
                </Link>
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
        <Avatar
        w="350px"
        h="400px"
        src={Profile}
        alt="Rohit Image"
        loading="eager"
        mb="4"
        alignSelf="center"
        borderRadius="10%"
        m="auto"
      />
        </Flex>
      </Stack>
    );
  }